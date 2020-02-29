import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Interfaces
import { Track } from '../interfaces/tracks';

// Environments
import { environment } from '../../environments/environment';

// Utilities
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TracksService {
  BASE_URL ='http://localhost:8000';
  constructor(private http: HttpClient) { }

  getTracks(): Observable<Track[]> {
    const headers = new HttpHeaders({
      Authorization: environment.token
    });
    return this.http.get<Track[]>(`${this.BASE_URL}/tracks/`, {headers});
  }

  retrieveTracks(id:string):Observable<Track> {
    const headers = new HttpHeaders({
      Authorization: environment.token
    });
    return this.http.get<Track>(`${this.BASE_URL}/tracks/${id}/`, {headers});
  }
  updateTrack(id:string, track: Track):Observable<Track> {
    const headers = new HttpHeaders({
      Authorization:environment.token
    });
    return this.http.put<Track>(`${this.BASE_URL}/traks/${id}/`,track, {headers});
  }
  partialUpdateTrack(id:string, track:Track):Observable<Track> {
    const headers = new HttpHeaders({
      Authorization:environment.token
    });
    return this.http.patch<Track>(`${this.BASE_URL}/tracks/${id}/`, track, {headers});
  }
  deleteTrack(id:string):Observable<Track> {
    const headers = new HttpHeaders({
      Authorization:environment.token
    });
    return this.http.delete<Track>(`${this.BASE_URL}/tracks/${id}/`, {headers});
  }
}
