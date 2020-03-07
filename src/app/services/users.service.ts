import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Verify } from '../interfaces/verify';
import { Users } from '../interfaces/users';
// Interfaces
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  verifyUser(verify: Verify): Observable<Verify> {
    return this.http.post<Verify>(`${this.BASE_URL}/users/verify/`, verify);
  }
  loginUser(login: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/users/login/`, login);
  }
  localSetUser(user:Users){
    localStorage.setItem('user',JSON.stringify(user));
  }
  localGetUser(){
    let user = localStorage.getItem('user');
    if(user){
      return JSON.parse(user);
    }else{
      return null;
    }
  }
  loguotUser() {
    localStorage.removeItem('user');
  }
}
