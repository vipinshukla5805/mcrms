import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
 
import { AdminService } from '../shared/admin/admin.service'

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers : [ AdminService ]
})
export class SearchComponent {

  private UserData:any;

  constructor(private _http: HttpService,private _adminService:AdminService) { }

  ngAfterViewInit() {
    //getAllUsers   
    this._adminService.getAllUsers()
    .subscribe((res:any) => {
      if(res && res.code == 'OK')
        this.UserData = res.data;
        console.log(res.data);
    })
  }

}
