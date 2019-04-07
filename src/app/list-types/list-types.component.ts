import {Component, OnInit} from '@angular/core';
import {TypeSalleService} from '../shared/services/type-salle.service';
import {TypeOrganismeService} from '../shared/services/type-organisme.service';
import {TypeOrganisme} from '../shared/models/type-organisme';
import {TypeSalle} from '../shared/models/type-salle';
import {Utils} from '../shared/Utils';

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

  ngOnInit() {
    this.typeOrganismeService.getAll().subscribe(data => {
      this.typesOrganismes = data;
      Utils.initDataTable("organism-type-table", true)
    });
    this.typeSalleService.getAll().subscribe(data => {
      this.typesSalles = data;
      Utils.initDataTable('salle-type-table', true);
    });
  }

  addOrganismType() {
    if (!this.typeOrganism || !this.typeOrganism.label) return;
    this.typeOrganismeService.create(this.typeOrganism).subscribe(data => {
      swal('Succès', 'Opération Terminée avec succès', 'success');
      this.typeOrganism = new TypeOrganisme();
      this.addOrganism = false;
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
      }, error => {
        swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
      }
    );
  }
}
