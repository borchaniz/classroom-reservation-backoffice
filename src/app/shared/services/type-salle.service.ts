import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {Reservation} from '../models/reservation';
import {TypeSalle} from '../models/type-salle';

@Injectable({
  providedIn: 'root'
})
export class TypeSalleService extends GenericService<TypeSalle> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.url = this.url + 'type_salle';
  }
}
