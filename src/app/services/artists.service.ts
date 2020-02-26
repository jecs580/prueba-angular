import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Interfaces
import { Artist } from '../interfaces/artists';

// Enviriments
import { environment } from '../../environments/environment';

// Utilities
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }
  getArtists(): Observable<Artist[]> {
    const headers = new HttpHeaders({
      Authorization: environment.token
    });
    return this.http.get<Artist[]>(`${this.BASE_URL}/artists/`, {headers});  // Ruta GET para listar artistas
   }
  retrieveArtists(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.BASE_URL}/artists/${id}`); // Recuperar un artista.
  }
  createArtists(formdata: FormData): Observable<Artist> {
    const headers = new HttpHeaders({
      Authorization: environment.token
    });
    return this.http.post<Artist>(`${this.BASE_URL}/artists/`, formdata, {headers});
  }
  UdpateArtists(id: string, artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(`${this.BASE_URL}/artists/${id}/`, artist);
  }
  PartialUpdateArtists(id: string, artist: Artist): Observable<Artist> {
    return this.http.patch<Artist>(`${this.BASE_URL}/artists/${id}`, artist);
  }
  deleteArtists(id: string) {
    return this.http.delete(`${this.BASE_URL}/artists/${id}/`);
  }
}
