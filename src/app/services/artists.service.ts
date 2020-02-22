import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
import { Artist } from '../interfaces/artists';

// Utilities
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  BASE_URL = 'localhost:8000';
  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.BASE_URL}/artists`);  // Ruta GET para listar artistas
   }
  retrieveArtists(id): Observable<Artist> {
    return this.http.get<Artist>(`${this.BASE_URL}/artists/${id}`); // Recuperar un artista.
  }
  createArtists(artist): Observable<Artist> {
    return this.http.post<Artist>(`${this.BASE_URL}/artists`, artist);
  }
  UdpateArtists(id, artist): Observable<Artist> {
    return this.http.put<Artist>(`${this.BASE_URL}/artists/${id}`, artist);
  }
  PartialUpdateArtists(id, artist): Observable<Artist> {
    return this.http.patch<Artist>(`${this.BASE_URL}/artists/${id}`, artist);
  }
  deleteArtists(id) {
    this.http.delete(`${this.BASE_URL}/artists/${id}`);
  }
}
