import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from './person';
import { Speaker } from './speaker';

@Injectable()
export class PeopleService{
  private baseUrl: string = 'http://swapi.co/api';
  // private baseUrl: string = 'http://echo.jsontest.com/firstname/Karl/lastname/McCracken/credentials/MasterDeveloper/city/Corona/zipcode/92883/isActive/true/infoGroup1DueDate/4-4-14';
  private speakerUrl: string = 'http://localhost:7373/speaker/3';
  constructor(private http : Http){
  }

  getCurrentTime() {
      return this.http.get('http://date.jsontest.com')
                        .map(res => res.json());
  }
  getEchoTest() {
      return this.http.get('http://date.jsontest.com')
                        .map(res => res.json());
  }

  getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapPersons)
      .catch(handleError);
      return people$;
  }

  get(id: number): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapPerson);
      return person$;
  }
  // // getSpeaker(id: number): Observable<Speaker> {
  // //   let speaker$ = this.http
  // //     .get(`${this.baseUrl}/speaker/${id}`, {headers: this.getHeaders()})
  // //     .map(mapSpeaker);
  // //     return speaker$;
  // // }
  // getSpeaker(): Observable<Speaker> {
  //   let speaker$ = this.http
  //     .get(`http://echo.jsontest.com/firstname/Karl/lastname/McCracken/credentials/MasterDeveloper/city/Corona/zipcode/92883/isActive/true/infoGroup1DueDate/4-4-14`, {headers: this.getHeaders()})
  //     .map(mapSpeaker);
  //     return speaker$;
  // }




  saveRecord(speaker: Speaker) : Observable<Response>{
    // this won't actually work because the StarWars API
    // is read-only. But it would look like this:
    return this.http
      .post(`${this.speakerUrl}`, JSON.stringify(speaker), {headers: this.getHeaders()});
  }
	// this.http.post('http://localhost:8080/speaker/3/', JSON.stringify(speaker), headers)	// 3 args



  // save(person: Person) : Observable<Response>{
  //   // this won't actually work because the StarWars API
  //   // is read-only. But it would look like this:
  //   return this.http
  //     .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), {headers: this.getHeaders()});
  // }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapPersons(response:Response): Person[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPerson)
}
// function mapSpeakers(response:Response): Speaker[]{
//    return response.json().results.map(toSpeaker)
// }

function toPerson(r:any): Person{
  let person = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: r.mass,
    height: r.height,
  });
  console.log('Parsed person:', person);
  return person;
}

    // id?: number;
    // firstname: string;
    // lastname: string;
    // credentials: string;
    // city: string;
    // isActive: string;
    // infoGroup1DueDate?: string;

// function toSpeaker(r:any): Speaker{
//   let speaker = <Speaker>({
//     // id: extractId(r),
//     firstname: r.firstname,
//     lastname: r.lastname,
//     credentials: r.credentials,
//     city: r.city,
//     isActive: r.isActive,
//     infoGroup1DueDate: r.infoGroup1DueDate
//   });
//   console.log('Parsed speaker:', speaker);
//   return speaker;
// }

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
  let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}

function mapPerson(response:Response): Person{
  // toPerson looks just like in the previous example
  return toPerson(response.json());
}
// function mapSpeaker(response:Response): Speaker{
//   return toSpeaker(response.json());
// }

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}


  // loadSpeakers() {
  //   this.http.get('http://localhost:8080/speaker/5')
  //       .map(res => res.json())
  //       .subscribe(
  //         x => this.speakers = x
  //       );
  // }

  // createSpeaker(lastname) {
  //   const speaker = {lastname};
  //   this.speakers.push(speaker);

  //   const headers = new Headers();
  //   // headers.append('Content-Type', 'application/json; charset=utf-8');
  //   // headers.append('Content-Type', 'application/json');

  //   // this.http.post('http://localhost:8080/speaker/3', JSON.stringify(speaker), headers)	// 3 args
  //   this.http.post('http://localhost:8080/speaker/3', JSON.stringify(speaker), '')	// 3 args
  //     .subscribe(
  //       () = {},	// We don't need to do anything special if the post was successful
  //       err => console.error(err)
  //     );
  // }

