import {Component, OnInit} from '@angular/core';
import {Organisme} from '../shared/models/organisme';
import {TypeOrganisme} from '../shared/models/type-organisme';
import {Utils} from '../shared/Utils';
import {OrganismeService} from '../shared/services/organisme.service';
import {TypeOrganismeService} from '../shared/services/type-organisme.service';

declare var swal: any;

@Component({
  selector: 'app-list-organisms',
  templateUrl: './list-organisms.component.html',
  styleUrls: ['./list-organisms.component.css']
})
export class ListOrganismsComponent implements OnInit {

  constructor(private organismeService: OrganismeService, private typeOrganismeService: TypeOrganismeService) {
  }

  organismes: Organisme[] = [];
  editOrganismes: boolean[];
  types: TypeOrganisme[] = [];


  ngOnInit() {
    this.organismeService.getAll().subscribe(data => {
      this.organismes = data;
      this.organismes.forEach(organisme => {
        organisme.type_organisme_id = organisme.type.id;
      });
      this.editOrganismes = Array(this.organismes.length);
      Utils.initDataTable('rooms-table');
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
    this.typeOrganismeService.getAll().subscribe(data => {
      this.types = data;
    });

  }

  editOrganisme(i: number) {
    this.organismeService.update(this.organismes[i].id, this.organismes[i]).subscribe(data => {
      swal('Succès', 'Opération Terminée avec succès', 'success');
      this.editOrganismes[i] = false;
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
  }

  deleteOrganisme(i: number) {
    swal({
      title: 'Attention',
      text: 'Êtes vous surs de vouloir supprimer cet élément?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then(result => {
      if (result) {
        this.organismeService.delete(this.organismes[i].id).subscribe(data => {
          swal('Succès', 'Opération Terminée avec succès', 'success');
          this.organismes.splice(i, 1);
        }, error => {
          swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
        });
      }
    });
  }

  switchEditMode(i: number) {
    this.editOrganismes[i] = !this.editOrganismes[i];
    if (this.editOrganismes[i]) this.organismes[i].backup = Organisme.clone(this.organismes[i]);
    else this.organismes[i] = this.organismes[i].backup;
  }

  invalidOrganisme(i: number) {
    return !this.organismes[i].label ||
      this.organismes[i].type_organisme_id == undefined ||
      this.organismes[i].type_organisme_id == null
  }

}
