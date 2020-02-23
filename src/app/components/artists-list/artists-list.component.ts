import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { Artist } from '../../interfaces/artists';
@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  artists: Artist;
  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists() {
    this.artistsService.getArtists()
    .subscribe(
      res => console.log(res),
      error => console.log(error)
      )
  }
}
