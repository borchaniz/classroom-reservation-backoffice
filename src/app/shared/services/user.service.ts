import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
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
    return <Observable<User>>this.http.post(this.url + 'user/register/', user);
  }

  public login(user: User): Observable<HttpResponse<Object>> {
    return <Observable<HttpResponse<Object>>>this.http.post(this.url + 'user/signin', user, {observe: 'response'});
  }

  getAuthUser(): Observable<User> {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<User>>this.http.get(this.url + 'user/authenticatedAdmin', {headers: headers});
  }

  getUnvalidatedUsers(): Observable<User[]> {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<User[]>>this.http.get(this.url + 'user/unvalidated', {headers: headers});

  }

  validate(id: number): Observable<User> {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<User>>this.http.put(this.url + 'user/validate/' + id, {}, {headers: headers});
  }

  delete(id: number): Observable<User> {
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<User>>this.http.delete(this.url + 'user/' + id, {headers: headers});

  }
}
