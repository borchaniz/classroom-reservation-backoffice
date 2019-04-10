import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GenericService} from './generic.service';
import {Reservation} from '../models/reservation';
import {Observable} from 'rxjs';
import {Consts} from '../Consts';

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends GenericService<Reservation> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.url = this.url + 'reservation';
  }

  public accept(id:number):Observable<any>{
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<any>> this.http.put(this.url+"/accept/"+id,{},{headers:headers});
  }

  public refuse(id:number):Observable<any>{
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<any>> this.http.put(this.url+"/refuse/"+id,{},{headers:headers});
  }

  loading(id: number) {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<any>> this.http.put(this.url+"/encours/"+id,{},{headers:headers});

  }
}
