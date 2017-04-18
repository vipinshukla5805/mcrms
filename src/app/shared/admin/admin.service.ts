// /api/v1/admin/login  

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class AdminService {
    constructor(private _http: Http) {

    }
    getAllUsers(){  
        return this._http.get('http://localhost:3000/api/v1/speaker').map(res => res.json());
    }
    getUser(uid, pwd) {
        return;
    }
}