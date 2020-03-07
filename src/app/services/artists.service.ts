import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Interfaces
import { Artist } from '../interfaces/artists';

// Enviriments
import { environment } from '../../environments/environment';

// Utilities
import {Observable} from 'rxjs';
import { Users } from '../interfaces/users';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  BASE_URL = 'http://localhost:8000';
  user:Users;
  constructor(private http: HttpClient, usersServices:UsersService) { 
    this.user= usersServices.localGetUser();
  }
  getArtists(): Observable<Artist[]> {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.user.access_token}`
    });
    return this.http.get<Artist[]>(`${this.BASE_URL}/artists/`, {headers});  // Ruta GET para listar artistas
   }
  retrieveArtists(id: string): Observable<Artist> {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.user.access_token}`
    });
    return this.http.get<Artist>(`${this.BASE_URL}/artists/${id}/`, {headers}); // Recuperar un artista.
  }
  createArtists(formdata: FormData): Observable<Artist> {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.user.access_token}`
    });
    return this.http.post<Artist>(`${this.BASE_URL}/artists/`, formdata, {headers});
  }
  UdpateArtists(id: string, formdata: FormData): Observable<Artist> {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.user.access_token}`
    });
    return this.http.put<Artist>(`${this.BASE_URL}/artists/${id}/`, formdata, {headers});
  }
  PartialUpdateArtists(id: string, artist: Artist): Observable<Artist> {
    return this.http.patch<Artist>(`${this.BASE_URL}/artists/${id}/`, artist);
  }
  deleteArtists(id: string) {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.user.access_token}`
    });
    return this.http.delete(`${this.BASE_URL}/artists/${id}/`, {headers});
  }
}
