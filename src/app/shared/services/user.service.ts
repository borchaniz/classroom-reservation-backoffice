import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {User} from '../models/user';
import {Consts} from '../Consts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string = Consts.BASE_URL;
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
  }


  public register(user: User): Observable<User> {
    return <Observable<User>> this.http.post(this.url + 'user/register/', user);
  }

  public login(user: User): Observable<HttpResponse<Object>> {
    return <Observable<HttpResponse<Object>>> this.http.post(this.url + 'user/signin', user, {observe: 'response'});
  }

  getAuthUser(): Observable<User> {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<User>> this.http.get(this.url + 'user/authenticatedAdmin', {headers: headers});
  }

  addToCart(bookId: number, quantity: number): Observable<any> {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<any>> this.http.post(this.url + 'user/addToCart', {bookId: bookId, quantity: quantity}, {headers: headers});
  }

  clearCart(): Observable<User> {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<User>> this.http.delete(this.url + 'user/clearCart', {headers: headers});
  }
}
