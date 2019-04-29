import {Component, OnInit} from '@angular/core';
import {TypeOrganismeService} from '../../shared/services/type-organisme.service';
import {Router} from '@angular/router';
import {Organisme} from '../../shared/models/organisme';
import {TypeOrganisme} from '../../shared/models/type-organisme';
import {OrganismeService} from '../../shared/services/organisme.service';

declare var swal: any;

@Component({
  selector: 'app-add-organism',
  templateUrl: './add-organism.component.html',
  styleUrls: ['./add-organism.component.css']
})
export class AddOrganismComponent implements OnInit {

  constructor(private typeOrganismeService: TypeOrganismeService,
              private organismeService: OrganismeService,
              private router: Router) {
  }

  organisme: Organisme = new Organisme();
  types: TypeOrganisme[] = [];

  ngOnInit() {
    this.typeOrganismeService.getAll().subscribe(data => {
      this.types = data;
    });
  }

  saveOrganisme() {
    this.organismeService.create(this.organisme).subscribe(data => {
      swal({title: 'Succès', text: 'Opération Terminée avec succès', type: 'success'}).then((result) => {
        this.router.navigateByUrl('/list-organisms');
      });
    }, error => {
      swal('Erreur', 'Une erreur est survenue, veuillez réessayer plus tard!', 'error');
    });
  }

  invalidForm() {
    return !this.organisme.label ||
      this.organisme.type_organisme_id == undefined ||
      this.organisme.type_organisme_id == null
  }
}
