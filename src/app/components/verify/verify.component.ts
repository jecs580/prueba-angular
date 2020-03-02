import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Verify } from '../../interfaces/verify';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  valor1:Verify={
    token:''
  }
  valor2:any={}
  mensaje:string='';
  constructor(
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(
      params => {
        console.log(params.get('token'));
        this.valor1.token=params.get('token');
        this.verificando()
      }
    );
  }
  verificando() {
    this.userService.verifyUser(this.valor1).subscribe(
      res => {
        console.log(res);
        this.valor2=res;
        this.mensaje=this.valor2.mensaje;
      },
      error => {
        this.mensaje=error.error["token"];
      }
    );
  }
  pruebaParams(){
    this.router.navigate(['/verify/'],{queryParams:{token:"abc"}});
  }
}
