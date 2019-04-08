import { Component, OnInit } from '@angular/core';
import {SalleService} from '../shared/services/salle.service';
import {Salle} from '../shared/models/salle';
import {Utils} from '../shared/Utils';

declare var swal:any;

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  constructor(private salleService:SalleService) {
  }

  salles:Salle[] = [];

  ngOnInit() {
    this.salleService.getAll().subscribe(data=>{
      this.salles = data
      Utils.initDataTable("rooms-table")
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
  }

}
