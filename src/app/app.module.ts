import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { ArtistsFormComponent } from './components/artists-form/artists-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistsListComponent,
    ArtistsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
