import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user';
import {Utils} from '../shared/Utils';

declare var swal: any;

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  users: User[] = [];

  ngOnInit() {
    this.userService.getUnvalidatedUsers().subscribe(data => {
      this.users = data;
      Utils.initDataTable('users-table',false);
    });
  }

  validate(i: number) {
    swal({
      title: 'Attention',
      text: 'Êtes vous surs de vouloir valider ce compte?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then(result => {
      this.userService.validate(this.users[i].id).subscribe(data => {
        this.users.splice(i, 1);
        swal('Succès', 'Opération Terminée avec succès!', 'success');
      }, error => {
        swal('Error', 'Une erreur est survenue! Veuillez réessayer plus tard!', 'error');

      });
    });
  }

  remove(i: number) {
    swal({
      title: 'Attention',
      text: 'Êtes vous surs de vouloir supprimer ce compte?',
      type: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then(result => {
      this.userService.delete(this.users[i].id).subscribe(data => {
        this.users.splice(i, 1);
        swal('Succès', 'Opération Terminée avec succès!', 'success');
      }, error => {
        swal('Error', 'Une erreur est survenue! Veuillez réessayer plus tard!', 'error');

      });
    });
  }
}
