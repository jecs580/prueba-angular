import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Interfaces
import { Artist } from '../interfaces/artists';

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
      'Authorization': 'Token 8bbeb3313d0badedf7e98d84f9642d9caf2a9f0c'
    });
    return this.http.get<Artist[]>(`${this.BASE_URL}/artists/`, {headers: headers});  // Ruta GET para listar artistas
   }
  retrieveArtists(id: string): Observable<Artist> {
    return this.http.get<Artist>(`${this.BASE_URL}/artists/${id}`); // Recuperar un artista.
  }
  createArtists(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(`${this.BASE_URL}/artists`, artist);
  }
  UdpateArtists(id: string, artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(`${this.BASE_URL}/artists/${id}`, artist);
  }
  PartialUpdateArtists(id: string, artist: Artist): Observable<Artist> {
    return this.http.patch<Artist>(`${this.BASE_URL}/artists/${id}`, artist);
  }
  deleteArtists(id: string) {
    this.http.delete(`${this.BASE_URL}/artists/${id}`);
  }
}
