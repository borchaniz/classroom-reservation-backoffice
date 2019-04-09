import {Component, OnInit} from '@angular/core';
import {SalleService} from '../shared/services/salle.service';
import {Salle} from '../shared/models/salle';
import {Utils} from '../shared/Utils';
import {TypeSalle} from '../shared/models/type-salle';
import {TypeSalleService} from '../shared/services/type-salle.service';

declare var swal: any;

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  constructor(private salleService: SalleService, private typeSalleService: TypeSalleService) {
  }

  salles: Salle[] = [];
  editSalles: boolean[];
  projectorAvailabilities = [Salle.PROJECTOR_AVAILIBLE, Salle.PROJECTOR_UNAVAILIBLE];
  types: TypeSalle[] = [];


  ngOnInit() {
    this.salleService.getAll().subscribe(data => {
      this.salles = data;
      this.salles.forEach(salle => {
        salle.type_salle_id = salle.type_salle.id;
      });
      this.editSalles = Array(this.salles.length);
      Utils.initDataTable('rooms-table');
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
    this.typeSalleService.getAll().subscribe(data => {
      this.types = data;
    });

  }

  editSalle(i: number) {
    this.salleService.update(this.salles[i].id, this.salles[i]).subscribe(data => {
      swal('Succès', 'Opération Terminée avec succès', 'success');
      this.editSalles[i] = false;
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
  }

  deleteSalle(i: number) {
    swal({
      title: 'Attention',
      text: 'Êtes vous surs de vouloir supprimer cet élément?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then(result => {
      if (result) {
        this.salleService.delete(this.salles[i].id).subscribe(data => {
          swal('Succès', 'Opération Terminée avec succès', 'success');
          this.salles.splice(i, 1);
        }, error => {
          swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
        });
      }
    });
  }

  switchEditMode(i: number) {
    this.editSalles[i] = !this.editSalles[i];
    if (this.editSalles[i]) this.salles[i].backup = Salle.clone(this.salles[i]);
    else this.salles[i] = this.salles[i].backup;
  }

  invalidSalle(i: number) {
    return !this.salles[i].number ||
      !this.salles[i].capacity ||
      this.salles[i].type_salle_id == undefined ||
      this.salles[i].type_salle_id == null ||
      this.salles[i].has_projector == undefined ||
      this.salles[i].has_projector == null;
  }
}
