import {Component, OnInit} from '@angular/core';
import {TypeSalleService} from '../shared/services/type-salle.service';
import {TypeOrganismeService} from '../shared/services/type-organisme.service';
import {TypeOrganisme} from '../shared/models/type-organisme';
import {TypeSalle} from '../shared/models/type-salle';
import {Utils} from '../shared/Utils';
import {Salle} from '../shared/models/salle';

declare var swal: any;
declare var jQuery: any;

@Component({
  selector: 'app-list-types',
  templateUrl: './list-types.component.html',
  styleUrls: ['./list-types.component.css']
})
export class ListTypesComponent implements OnInit {

  constructor(private typeSalleService: TypeSalleService, private typeOrganismeService: TypeOrganismeService) {
  }

  typesOrganismes: TypeOrganisme[];
  typesSalles: TypeSalle[];
  addOrganism = false;
  addSalle = false;
  typeOrganism = new TypeOrganisme();
  typeSalle = new TypeSalle();
  editOrganismes: boolean[] = [];
  editSalles: boolean[] = [];

  ngOnInit() {
    this.typeOrganismeService.getAll().subscribe(data => {
      this.typesOrganismes = data;
      this.editOrganismes = new Array<boolean>(this.typesOrganismes.length);
      Utils.initDataTable('organism-type-table', true);
    });
    this.typeSalleService.getAll().subscribe(data => {
      this.typesSalles = data;
      this.editSalles = new Array<boolean>(this.typesSalles.length);
      Utils.initDataTable('salle-type-table', true);
    });
  }

  addOrganismType() {
    if (!this.typeOrganism || !this.typeOrganism.label) return;
    this.typeOrganismeService.create(this.typeOrganism).subscribe(data => {
      swal('Succès', 'Opération Terminée avec succès', 'success');
      this.typeOrganism = new TypeOrganisme();
      this.addOrganism = false;
      this.typesOrganismes.push(data);
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');

    });
  }

  addSalleType() {
    if (!this.typeSalle || !this.typeSalle.label) return;
    this.typeSalleService.create(this.typeSalle).subscribe(data => {
        swal('Succès', 'Opération Terminée avec succès', 'success');
        this.typeSalle = new TypeSalle();
        this.addSalle = false;
        this.typesSalles.push(data);
      }, error => {
        swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
      }
    );
  }

  editOrganisme(i: number) {
    this.typeOrganismeService.update(this.typesOrganismes[i].id, this.typesOrganismes[i]).subscribe(data => {
      swal('Succès', 'Opération Terminée avec succès', 'success');
      this.editOrganismes[i] = false;
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
  }

  editSalle(i: number) {
    this.typeSalleService.update(this.typesSalles[i].id, this.typesSalles[i]).subscribe(data => {
      swal('Succès', 'Opération Terminée avec succès', 'success');
      this.editSalles[i] = false;
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
  }

  switchSalleEditMode(i){
    this.editSalles[i] = !this.editSalles[i];
    if (this.editSalles[i]) this.typesSalles[i].backup = TypeSalle.clone(this.typesSalles[i]);
    else this.typesSalles[i] = this.typesSalles[i].backup;
  }

  switchOrganismEditMode(i){
    this.editOrganismes[i] = !this.editOrganismes[i];
    if (this.editOrganismes[i]) this.typesOrganismes[i].backup = TypeOrganisme.clone(this.typesOrganismes[i]);
    else this.typesOrganismes[i] = this.typesOrganismes[i].backup;
  }

}
