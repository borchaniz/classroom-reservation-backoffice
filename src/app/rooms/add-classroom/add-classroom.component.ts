import {Component, OnInit} from '@angular/core';
import {Salle} from '../../shared/models/salle';
import {TypeSalle} from '../../shared/models/type-salle';
import {TypeSalleService} from '../../shared/services/type-salle.service';
import {SalleService} from '../../shared/services/salle.service';
import {Router} from '@angular/router';

declare var swal:any;

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  constructor(private typeSalleService:TypeSalleService,
              private salleService:SalleService,
              private router:Router) {
  }

  salle: Salle = new Salle();
  types:TypeSalle[] = [];
  projectorAvailabilities = [Salle.PROJECTOR_AVAILIBLE, Salle.PROJECTOR_UNAVAILIBLE];

  ngOnInit() {
    this.typeSalleService.getAll().subscribe(data=>{this.types = data});
  }

  saveSalle() {
    this.salleService.create(this.salle).subscribe(data=>{
      swal({title: 'Succès', text: 'Opération Terminée avec succès', type: 'success'}).then((result)=>{
        this.router.navigateByUrl('/list-rooms');
      });
    },error=>{
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
  }

  invalidForm(){
    return !this.salle.number ||
      !this.salle.capacity ||
      this.salle.type_salle_id == undefined ||
      this.salle.type_salle_id == null ||
      this.salle.has_projector == undefined ||
      this.salle.has_projector == null;
  }
}
