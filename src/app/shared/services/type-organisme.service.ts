import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {Reservation} from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class TypeOrganismeService extends GenericService<Type_Organisme> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.url = this.url + 'type_organisme';
  }
}
