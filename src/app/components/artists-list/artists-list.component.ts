import { Component, OnInit } from '@angular/core';
//Services
import { ArtistsService } from '../../services/artists.service';
import { TracksService } from '../../services/tracks.service';
// Interfaces
import { Artist } from '../../interfaces/artists';
import { Track } from '../../interfaces/tracks';
@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  artists: Artist[] = [];
  tracks: Track[]=[];
  constructor(
    private artistsService: ArtistsService,
    private tracksService: TracksService
    ) { }

  ngOnInit(): void {
    this.getArtists();
    this.getTracks();
  }

  getArtists() {
    this.artistsService.getArtists()
      .subscribe(
        res => {
          console.log(res);
          this.artists = res;
          console.log('Esto es de artist', this.artists);
      },
        error => {
          console.log(error);
        }
      );
  }

  getTracks() {
    this.tracksService.getTracks()
      .subscribe(
        res => {
          console.log(res);
          this.tracks = res;
          console.log('Esto es de tracks', this.tracks[0].file);
      },
        error => {
          console.log(error);
        }
      );
  }

  deleteArtist(id: string) {
    this.artistsService.deleteArtists(id)
      .subscribe(
      res => {
        console.log(res);
        this.getArtists();
      },
      error => {
        console.log(error);
      }
    );
  }
}
