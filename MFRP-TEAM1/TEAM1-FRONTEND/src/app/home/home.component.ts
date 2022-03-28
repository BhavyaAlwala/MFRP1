import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pdtdata } from '../pdtdata';
import { ProductsService } from '../products.service';
import {HttpClient} from '@angular/common/http'
@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

title = 'angularConnecMongoDB';
public response : Observable<Pdtdata[]>
data:any;
arr:any=[];
constructor(private pdtservice: ProductsService,private http:HttpClient){
this.response = this.pdtservice.fetchAPI();
}
onSubmit(data:any){
this.http.post('http://localhost:2000/api/employee',data)
.subscribe((result)=>{
console.warn("result",result)
this.response = this.pdtservice.fetchAPI();
})
console.warn(data);
}

deleteProduct(employeeId:any){

this.pdtservice.deleteProduct(employeeId).subscribe((result: any)=>{
console.warn('result',result)
this.response = this.pdtservice.fetchAPI();
})
}

ngOnInit(){
this.pdtservice.fetchAPI().subscribe((data:any)=>{
this.data=data;
console.log(data);
})
}

}