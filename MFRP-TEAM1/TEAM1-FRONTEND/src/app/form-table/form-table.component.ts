import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pdtdata } from '../pdtdata';
import { ProductsService } from '../products.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
selector: 'app-form-table',
templateUrl: './form-table.component.html',
styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

public response!: Observable<Pdtdata[]>;
alert:boolean=false;
editEmp=new FormGroup ({
_id:new FormControl(''),
employeeId:new FormControl(''),
firstName:new FormControl(''),
lastName:new FormControl(''),
address:new FormControl(''),
phoneNumber:new FormControl(''),
location:new FormControl(''),
})
constructor(private pdtservice: ProductsService,private http:HttpClient, private router:ActivatedRoute) {
this.response = this.pdtservice.fetchAPI();
}

ngOnInit():void {
// console.warn(this.router.snapshot.params['_id'])
this.pdtservice.getCurrentProductData(this.router.snapshot.params['_id']).subscribe((result:any)=>{
this.editEmp=new FormGroup({
_id:new FormControl(result['_id']),
employeeId:new FormControl(result['employeeId']),
firstName:new FormControl(result['firstName']),
lastName:new FormControl(result['lastName']),
address:new FormControl(result['address']),
phoneNumber:new FormControl(result['phoneNumber']),
location:new FormControl(result['location']),
})
})
}
submission(){
console.warn(this.editEmp.value);
this.pdtservice.updateData(this.router.snapshot.params['_id'],this.editEmp.value,).subscribe((result)=>{console.warn(result)})
this.alert = true;
}
}