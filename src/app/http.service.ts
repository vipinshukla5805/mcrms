import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/Rx';   // Needed for the map command. Map maps one observable into another observable.

@Injectable()
export class HttpService {
    

    constructor(private http: Http) {}
    
    
    getData() {
        //this.http.get('https://angular2-course-60763.firebaseio.com/title.json');
        return this.http.get('https://angular2-course-fefb0.firebaseio.com/title.json')
        // return this.http.get('http://lab2.callperfect.net/api/v1/speaker')
            .map((response: Response) => response.json());
    }
    
    sendData(user: any) {
        const body = JSON.stringify(user);  // Important to stringify, b/c only a string text can be sent with a POST
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('https://angular2-course-60763.firebaseio.com/json.json', body, {
        return this.http.post('https://angular2-course-fefb0.firebaseio.com/json.json', body, {
                headers: headers
            })
            .map((data: Response) => data.json());
    }
    // sendData() {
    //     const user = {username: "Karl", email: "email@test.com"};
    //     const body = JSON.stringify(user);  // Important to stringify, b/c only a string text can be sent with a POST
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     // return this.http.post('https://angular2-course-60763.firebaseio.com/json.json', body, {
    //     return this.http.post('https://angular2-course-fefb0.firebaseio.com/json.json', body, {
    //             headers: headers
    //         })
    //         .map((data: Response) => data.json());
    // }



    saveSpeaker(spkr: any) {
        // const speakerUrl: string = 'http://localhost:7373/speaker/3/';
        const speakerUrl: string = 'http://jsonplaceholder.typicode.com/posts';
        const body = JSON.stringify(spkr);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(speakerUrl,body,{
            headers: headers
        })
            .map((data: Response) => data.json());
    }
}