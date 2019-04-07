import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {TypeOrganisme} from '../models/type-organisme';

@Injectable({
  providedIn: 'root'
})
export class TypeOrganismeService extends GenericService<TypeOrganisme> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.url = this.url + 'type_organisme';
  }
}
