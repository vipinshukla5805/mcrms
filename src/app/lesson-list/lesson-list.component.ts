import { Component, OnInit, Input } from '@angular/core';

// import { SssService } from '../sss.service';
// import { lesson } from './lesson';
// import { LogService } from '../log.service';
// import { DataService } from '../data.service';
// import { Http, Headers } from "@angular/http";

import { Person } from '../person';
// import { PeopleService } from './people.service';
import { PeopleService } from '../data.service';

import { disableDeprecatedForms, provideForms, FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'lesson-list',
  templateUrl: 'lesson-list.component.html',
  styleUrls: ['lesson-list.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  // providers: [DataService]
  // providers: [SssService]
})
export class LessonListComponent implements OnInit {

  public myForm: FormGroup;
  
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;
  // speakers = [];
  // Input()
  // lessons: lesson[] = [];

  // constructor() { }
  // constructor(private sssService: SssService) {
  //   this.lessons = this.sssService.loadLessons();
  //   console.log(this.lessons.length);
  // }
  // constructor(private log: LogService) {
  //   this.lessons = this.log.loadLessons();
  // }
  constructor(private _fb: FormBuilder, private peopleService: PeopleService) {
    // console.log(this.data.)
      this.myForm = _fb.group({
          firstname: ['',
              [
                Validators.required,
                Validators.minLength(5)
              ]
            ],
          lastname: ['',[
            Validators.required
          ]],
          name: ['',[
            Validators.required
          ]],
          credentials: ['',[
            Validators.required
          ]],
          address: this._fb.group({
            street: [],
            zip: ['',[
              Validators.minLength(5),
              Validators.maxLength(5),
              Validators.pattern('[0-9]+')
            ]],
            city: []
          })
      });
      // this.partialLoad();  // Tried this, didn't work. Gives error: "Cannot read property 'name' of undefined". Obviously, it hasn't gotten the data yet. Seems to me I should be putting this after a subscribe(), but I don't know what syntax to use.
  }


  ngOnInit() {
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => {
            this.people = p;
            // this.partialLoad();
            this.myForm.patchValue({name: this.people[3].name});
            this.myForm.patchValue({firstname: this.people[9].name});
          }
           ,
         /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);
      // .do(data => console.log(data)); //debug to console;
      // this.partialLoad();
  }

  partialLoad() {
    // this.myForm.patchValue({name: 'Partial'});
    this.myForm.patchValue({name: this.people[1].name});
    // this.myForm.patchValue(JSON.parse(JSON.stringify(this.people[0].name)));
    // this.myForm.patchValue({firstname: 'Partial'});
    // alert("firstName:")
    console.log("people:" + JSON.parse(JSON.stringify(this.people)));
    console.log("person 0:" + JSON.parse(JSON.stringify(this.people[0].name)));
    // alert(JSON.parse(JSON.stringify(this.people)));
    // alert(this.people[0].name);
    // console.log("people:" + JSON.parse(this.people));
  }
  reset() {
    this.myForm.reset();  // Resets everything back to pristine and untouched.
  }
}
