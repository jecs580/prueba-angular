import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private usersSevices:UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLogout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
