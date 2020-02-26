import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../interfaces/artists';
@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  artists: Artist[] = [];
  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.getArtists();
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

  deleteArtist(id:string) {
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
