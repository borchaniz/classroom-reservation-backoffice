import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Consts} from '../Consts';
import {Observable} from 'rxjs';

export class GenericService<T> {
  public url: string;
  headers: HttpHeaders = new HttpHeaders();
  http:HttpClient;
  constructor(http:HttpClient) {
    this.url = Consts.BASE_URL;
    this.headers.append('Content-Type', 'application/json');
    this.http = http;
  }

  public getAll():Observable<T[]>{
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<T[]>> this.http.get(this.url,{headers:headers});
  }

  public getById(id:number):Observable<T>{
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<T>> this.http.get(this.url+"/"+id,{headers:headers});
  }

  public create(item:T):Observable<T>{
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<T>> this.http.post(this.url,item,{headers:headers});
  }

  public update(id:number, item:T):Observable<T>{
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<T>> this.http.put(this.url+"/"+id,item,{headers:headers});
  }


  public delete(id:number):Observable<any>{
    const headers = this.headers.set('Authorization', localStorage.getItem(Consts.TOKEN_STORAGE));
    return <Observable<any>> this.http.delete(this.url+"/"+id,{headers:headers});
  }

}
