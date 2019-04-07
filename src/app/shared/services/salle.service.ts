import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {Salle} from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService extends GenericService<Salle> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.url = this.url + 'salle';
  }
}
