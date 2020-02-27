// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // El ActivatedRoute proporciona informacion de la ruta.
// Interfaces
import { Artist } from '../../interfaces/artists';

// Services
import { ArtistsService } from '../../services/artists.service';
@Component({
  selector: 'app-artists-form',
  templateUrl: './artists-form.component.html',
  styleUrls: ['./artists-form.component.css']
})
export class ArtistsFormComponent implements OnInit {
  artist: Artist = {
    name: '',
    description: '',
    image: null
  };
  uploadForm: FormGroup;
  edit: Boolean = false;
  params1: any;
  constructor(
    private formBuilder: FormBuilder,
    private artistService: ArtistsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (Object.keys(params).length !== 0) {
      this.artistService.retrieveArtists(params.id)
        .subscribe(
          res => {
            this.params1 = params;
            this.edit = true;
            this.artist = res;
          }
        );
    }
    this.uploadForm = this.formBuilder.group({
      name: '',
      description: '',
      image: ['']
    });
  }
  updateArtist() {
    const formData = new FormData();
    formData.append('image', this.uploadForm.get('image').value);
    formData.append('name', this.uploadForm.get('name').value);
    formData.append('description', this.uploadForm.get('description').value);
    console.log(formData);
    this.artistService.UdpateArtists(this.params1.id, formData).subscribe(
      res => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }
  submitartist() {
    const formData = new FormData();
    formData.append('image', this.uploadForm.get('image').value);
    formData.append('name', this.uploadForm.get('name').value);
    formData.append('description', this.uploadForm.get('description').value);
    this.artistService.createArtists(formData).subscribe(
      res => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }
  onUpload(e) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.uploadForm.get('image').setValue(file);
    }
  }
}
