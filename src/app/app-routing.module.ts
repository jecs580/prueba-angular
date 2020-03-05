import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { ArtistsFormComponent } from './components/artists-form/artists-form.component';
const routes: Routes = [
  {path: '', component: ArtistsListComponent},
  {path: 'artist', component: ArtistsListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'artist/create', component: ArtistsFormComponent},
  {path: 'artist/edit/:id', component: ArtistsFormComponent},
  {path: 'verify', component: VerifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
