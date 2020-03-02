import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Verify } from '../interfaces/verify';
// Interfaces
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  verifyUser(verify:Verify):Observable<Verify>{
    return this.http.post<Verify>(`${this.BASE_URL}/users/verify/`,verify);
  }
}