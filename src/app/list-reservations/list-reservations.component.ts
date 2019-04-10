import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../shared/services/reservation.service';
import {Reservation} from '../shared/models/reservation';
import {Utils} from '../shared/Utils';

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
      this.newReservations = data.filter(item => item.status == null);
      this.oldReservations = data.filter(item => item.status != null);
      this.newReservations.forEach(item => {
        console.log(item.start_date);
        item.start_date = Utils.displayDate(new Date(item.start_date));
        item.end_date = Utils.displayDate(new Date(item.end_date));
      });
      this.oldReservations.forEach(item => {
        console.log(item.start_date);
        item.start_date = Utils.displayDate(new Date(item.start_date));
        item.end_date = Utils.displayDate(new Date(item.end_date));
      });
      this.reservations = this.newReservations;
    });
  }

  accept(i: number) {

  }

  refuse(i: number) {

  }

  switchMode() {
    if (this.reservations == this.newReservations) this.reservations = this.oldReservations;
    else this.reservations = this.newReservations;
  }
}
