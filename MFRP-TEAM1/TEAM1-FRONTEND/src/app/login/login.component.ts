import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public sampledata:any = []
Email1:String=""
Password1: String=""
constructor(private Account: AccountService ) {
}
Email (val: String ,val1: String) {
// console.warn(val)
this.Email1=val
this.Password1=val1
// console.warn(val1)
}
login() {

this.Account.getRegister().subscribe((data : any)=>{



for(let i=0 ; i<data.length; i++){

if(this.Email1===data[i].EmailAdress && this.Password1===data[i].Password ) {
console.warn("hello")
}
}})

}

ngOnInit() {
this.Account.getRegister().subscribe((data)=>{
// console.warn(data);
this.sampledata=data
console.warn(this.sampledata)
})

}

}
