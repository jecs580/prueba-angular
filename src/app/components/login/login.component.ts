import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {
    email: '',
    password: ''
  };
  user:Users={
    user:null,
    access_token:''
  }
  constructor(
    private usersService: UsersService,
    private route:Router) { }

  ngOnInit(): void {
    console.log(this.usersService.localGetUser());
  }
  Onlogin() {
    this.usersService.loginUser(this.login).subscribe(
      res => {
        this.user=res;
        this.usersService.localSetUser(this.user);
        this.route.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
