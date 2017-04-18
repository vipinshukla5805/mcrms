// /api/v1/admin/login  

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class LoginService {
    constructor(private _http: Http) {

    }
    login(uid, pwd) {
        var body = `username=${uid}&password=${pwd}`;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:3000/api/v1/admin/login',body,{ headers: headers }).map(res => res.json());
    }
}