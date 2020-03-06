import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
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
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }
  Onlogin() {
    this.usersService.loginUser(this.login).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
}
