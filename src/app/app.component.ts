import { Component } from '@angular/core';
import { FaComponent } from 'angular2-fontawesome/components';

import { PeopleService } from './data.service';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PeopleService, HttpService],
  directives: [ FaComponent ]
})
export class AppComponent {

  // constructor(private sssService: SssService) {
    
  // }
}


