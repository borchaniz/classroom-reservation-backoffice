import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {Organisme} from '../models/organisme';

@Injectable({
  providedIn: 'root'
})
export class OrganismeService extends GenericService<Organisme> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.url = this.url + 'organisme';
  }
}
