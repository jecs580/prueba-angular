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
  retrieveArtists(id) { }
  createArtists(artist) { }
  deleteArtists(id) { }
  UdpateArtists(id, artist) { }
}
