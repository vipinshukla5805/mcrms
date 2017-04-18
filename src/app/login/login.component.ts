import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

import { LoginService } from '../shared/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers : [ LoginService ]
})
export class LoginComponent implements OnInit {

  private Username:string;
  private Password:string;
  constructor(private router: Router,private _loginService:LoginService) { }

  ngOnInit() {
  }

  login(){
    //call login service set 
      this._loginService.login(this.Username, this.Password)
      .subscribe((res:any) => {   
        if (res && res.status == 'OK') {
          this.router.navigateByUrl('/search')
        }
      })
  }

}
