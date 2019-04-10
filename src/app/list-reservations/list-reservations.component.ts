import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../shared/services/reservation.service';
import {Reservation} from '../shared/models/reservation';
import {Utils} from '../shared/Utils';

declare var swal: any;

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent implements OnInit {


  reservations: Reservation[] = [];
  newReservations: Reservation[] = [];
  oldReservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.reservationService.getAll().subscribe(data => {
      this.oldReservations = data.filter(item => item.status == 2 || item.status == 1);
      this.newReservations = data.filter(item => !item.status || item.status == 3);
      this.newReservations.forEach(item => {
        item.start_date = Utils.displayDate(new Date(item.start_date));
        item.end_date = Utils.displayDate(new Date(item.end_date));
      });
      this.oldReservations.forEach(item => {
        item.start_date = Utils.displayDate(new Date(item.start_date));
        item.end_date = Utils.displayDate(new Date(item.end_date));
      });
      this.reservations = this.newReservations;
      Utils.initDataTable('reservations-table');
    });
  }

  accept(i: number) {
    swal({
      title: 'Attention',
      text: 'Êtes vous surs de vouloir Accepter cette demande?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then(result => {
      if (result) {
        this.reservationService.accept(this.newReservations[i].id).subscribe(data => {
          this.newReservations.splice(i, 1);
          swal({title: 'Succès', text: 'Opération Terminée avec succès!', type: 'success'});
        }, error=>{
          swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
        });
      }
    });

  }

  refuse(i: number) {
    swal({
      title: 'Attention',
      text: 'Êtes vous surs de vouloir Refuser cette demande?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then(result => {
      if (result) {
        this.reservationService.refuse(this.newReservations[i].id).subscribe(data => {
          this.newReservations.splice(i, 1);
          swal({title: 'Succès', text: 'Opération Terminée avec succès!', type: 'success'});
        }, error=>{
          swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
        });
      }
    });
  }

  loading(i: number) {
    swal({
      title: 'Attention',
      text: 'Êtes vous surs de vouloir changer l\'état cette demande à \'en cours\'?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then(result => {
      if (result) {
        this.reservationService.loading(this.newReservations[i].id).subscribe(data => {
          this.newReservations[i].status = 3;
          swal({title: 'Succès', text: 'Opération Terminée avec succès!', type: 'success'});
        }, error=>{
          swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
        });
      }
    });
  }

  switchMode() {
    if (this.reservations == this.newReservations) this.reservations = this.oldReservations;
    else this.reservations = this.newReservations;
  }
}
