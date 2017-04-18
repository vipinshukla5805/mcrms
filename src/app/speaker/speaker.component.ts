// import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Input } from '@angular/core';
// import { disableDeprecatedForms, provideForms, FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder } from '@angular/forms';
// import { SpeakerService } from '../speaker.service';
// import { Speaker } from '../speaker';
import {Headers} from "@angular/http";

import { Person } from '../person';
// import { PeopleService } from './people.service';
import { PeopleService } from '../data.service';
import { Speaker } from '../speaker';

import { disableDeprecatedForms, provideForms, FormGroup, FormArray, FormControl, REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'speaker',
  templateUrl: 'speaker.component.html',
  styleUrls: ['speaker.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
})
export class SpeakerComponent implements OnInit {
  public myForm: FormGroup;
  lectures: FormArray;
  
  speaker: Speaker;
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  // // speakers: Speaker[];
  // mode = 'Observable';
  // client: any;

  // // public myForm: FormGroup; // our model driven form
  // public submitted: boolean; // keep track on whether form is submitted
  // public events: any[] = []; // use later to display form changes
  
  // public infoGroup1DueDate = "10/1/16";
  // public infoGroup2DueDate = "11/12/16";
  // public infoGroup3DueDate = "12/31/16";

  public infoGroup1DueDate: string;
  public infoGroup2DueDate = "11/12/16";
  public infoGroup3DueDate = "12/31/16";

  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];
  constructor(private _fb: FormBuilder, private peopleService: PeopleService) {
  
        this.myForm = _fb.group({
        gender: ['',[Validators.required]],
        // testlabel: ['abcdef',[]],
        isActive: ['',[]],
        firstname: ['',
            [
              Validators.required,
              Validators.minLength(5)
            ]
          ],
        lastname: ['',[
          Validators.required
        ]],
        // name: ['',[
        //   Validators.required
        // ]],
        credentials: ['',[
          Validators.required
        ]],
        address: this._fb.group({
          street1: [],
          street2: [],
          city: [],
          zipcode: ['',[
            Validators.minLength(5),
            Validators.maxLength(5),
            Validators.pattern('[0-9]+')
          ]]
        }),
        lectures: this.buildArray()
    });
  }

buildArray(): FormArray {
  this.lectures = this._fb.array([
    this.buildGroup()
  ]);
  return this.lectures;
}

buildGroup(): FormGroup {
  return this._fb.group({
    title: '',
    description: '',
    objective: '',
    outline: ''
    // sessionnum: ''
  });
}
  addLecture() {
    this.lectures.push(this.buildGroup());
  }
  removeLecture(i: number) {
    console.log("i: " + i);
    this.lectures.removeAt(i);
  }

  ngOnInit() {
    // const lectureArray = this.buildArray();
    // const user =  
    //   {
    //     "gender": "F",
    //     "isActive": true,
    //     "firstname": "First",
    //     "lastname": "Last",
    //     "credentials": "Cred",
    //     "address": {
    //       "street1": "123 Main St.",
    //       "street2": "112-323",
    //       "city": "Corona",
    //       "zip": "92883"
    //     },"lectures":lectureArray
    //     // "lectures": [
    //     //   {
    //     //     "title": "1",
    //     //     "description": "2",
    //     //     "objective": "3",
    //     //     "outline": "4",
    //     //   },
    //     //   {
    //     //     "title": "11",
    //     //     "description": "22",
    //     //     "objective": "33",
    //     //     "outline": "44",
    //     //   }
    //     // ]
    //   }

    //   // const ffb <FormArray>
    //   this.myForm.setValue(user);


    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => {
            this.people = p;
            // this.partialLoad();
            this.myForm.patchValue({genderxx:'M'});
            // this.myForm.patchValue({testlabel:'working'});
            // this.myForm.patchValue({isActive:'true'});
            // this.myForm.patchValue({isActive:this.people[0].isActive});
            this.myForm.patchValue({name: this.people[0].name});
            this.myForm.patchValue({firstname: this.people[0].name});
            this.infoGroup1DueDate = this.people[0].infoGroup1DueDate;
          }
           ,
         /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);

  }
  // ngOnInit() {
  //   this.peopleService
  //     // .getCurrentTime()
  //     .getSpeaker()
  //     .subscribe(
  //        /* happy path */ p => {
  //           // this.people = p;
  //           // // this.partialLoad();
  //           // this.myForm.patchValue({genderxx:'M'});
  //           // // this.myForm.patchValue({testlabel:'working'});
  //           // // this.myForm.patchValue({isActive:'true'});
  //           // this.myForm.patchValue({isActive:this.people[0].isActive});
  //           // this.myForm.patchValue({name: this.people[0].name});
  //           // this.myForm.patchValue({firstname: this.people[0].name});
  //           // this.infoGroup1DueDate = this.people[0].infoGroup1DueDate;
  //           // this.infoGroup1DueDate = JSON.stringify(p);
  //           // this.infoGroup1DueDate = JSON.stringify(this.speaker.infoGroup1DueDate);
  //           this.myForm.patchValue({firstname: this.speaker.firstname});
  //           this.infoGroup1DueDate = "testing";
  //         }
  //          ,
  //        /* error path */ e => this.errorMessage = e,
  //       /* onComplete */ () => this.isLoading = false);
  // }





    //   getCurrentTime() {
    //     return this._http.get('http://date.jsontest.com')
    //                      .map(res => res.json());
    // }


  partialLoad() {
    // this.myForm.patchValue({name: 'Partial'});
    this.myForm.patchValue({name: this.people[1].name});
    console.log("people:" + JSON.parse(JSON.stringify(this.people)));
    console.log("person 0:" + JSON.parse(JSON.stringify(this.people[0].name)));
  }
  reset() {
    this.myForm.reset();  // Resets everything back to pristine and untouched.
  }
  save(){
    // // alert(this.myForm.value)
    // alert(JSON.stringify(this.myForm.value));
    // this.peopleService.save(Speaker);
  }

}
