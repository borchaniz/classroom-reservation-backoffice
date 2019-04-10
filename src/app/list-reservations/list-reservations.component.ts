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

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.reservationService.getAll().subscribe(data => {
      this.reservations = data;
      this.reservations.forEach(item => {
        console.log(item.start_date);
        item.start_date = Utils.displayDate(new Date(item.start_date));
        item.end_date = Utils.displayDate(new Date(item.end_date));
      });
    });
  }

  accept(i: number) {
    
  }

  refuse(i: number) {
    
  }
}
