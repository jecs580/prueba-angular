import { Component, OnInit } from '@angular/core';
import{ Artist } from '../../interfaces/artists'
@Component({
  selector: 'app-artists-form',
  templateUrl: './artists-form.component.html',
  styleUrls: ['./artists-form.component.css']
})
export class ArtistsFormComponent implements OnInit {
  artist: Artist={
    name:'',
    description:'',
    image:null,
  }
  constructor() { }

  ngOnInit(): void {
  }
  submitproduct(){
    console.log(this.artist);
  }
  onUpload(e){
    console.log('File Archivo',e.target.files[0]);
  }
}
