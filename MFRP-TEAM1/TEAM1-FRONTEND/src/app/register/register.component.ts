import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

constructor(private http:HttpClient){}
onSubmit(data:any) {
this.http.post('http://localhost:8080/api/register',data)
.subscribe((result ) => {
console.warn("result",result)
})
console.warn(data);
}
Reg(){
    Swal.fire('Welcome','You have successfully Registered','success')
    
    }
ngOnInit(): void {
}

}