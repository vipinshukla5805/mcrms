import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../http.service';

import { disableDeprecatedForms, provideForms, FormGroup, FormArray, FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'tester',
  templateUrl: 'tester.component.html',
  styleUrls: ['tester.component.css'],
  providers: [HttpService],
  directives: [REACTIVE_FORM_DIRECTIVES],
})
export class TesterComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder, private httpService: HttpService) {
    this.myForm = _fb.group({
      username: ['',[Validators.required,]],
      email: ['',[Validators.required]]
    });
  }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (x: Response) => console.log(x)
      );
  }
  // onSubmit(username: string, email:string) {
  //   this.httpService.sendData({username: username, email: email})
  //     .subscribe(
  //       data => console.log(data)
  //     );
  // }
  onSubmit() {
    this.httpService.sendData(this.myForm)
      .subscribe(
        data => console.log(data)
      );
  }

}
