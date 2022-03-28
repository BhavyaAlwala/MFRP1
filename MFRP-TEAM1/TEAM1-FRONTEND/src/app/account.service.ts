import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { accountdata } from './accountdata';

@Injectable({
providedIn: 'root'
})
export class AccountService {

constructor( private http: HttpClient) {

}
public getRegister()
{
return this.http.get
( 'http://localhost:8080/api/register');


}
}