import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Reservation} from '../shared/models/reservation';
import {ReservationService} from '../shared/services/reservation.service';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private reservationService:ReservationService) {
  }

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin, timeGridPlugin, listPlugin ];

  events: CalendarEvent[] = [];
  header;

  ngOnInit() {
    this.reservationService.getAll().subscribe(data=>{
      this.events = CalendarEvent.fromReservations(data.filter(item=>item.status == 1 || item.status == 2));
      this.header = {
        left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth, timeGridWeek,listWeek'
      };
    });

  }


}

class CalendarEvent {
  public title: string;
  public start: Date;
  public end: Date;

  static fromReservation(reservation: Reservation): CalendarEvent {
    return {
      title: reservation.organisme.label + ': salle' + reservation.salle.number,
      start: new Date(reservation.start_date),
      end: new Date(reservation.end_date)
    };
  }

  static fromReservations(reservations: Reservation[]): CalendarEvent[] {
    let res: CalendarEvent[] = [];
    for (let r of reservations) res.push(this.fromReservation(r));
    return res;
  }
}
