import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { AnytimeService } from 'src/app/servies/anytime.service';

@Component({
  selector: 'app-reigester',
  templateUrl: './reigester.component.html',
  styleUrls: ['./reigester.component.scss']
})
export class ReigesterComponent implements OnInit {
  submitted: boolean = false;
  hide:boolean = true;
constructor(private myservice:AnytimeService){
}
  myform=new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z]+')]),
    email:new FormControl('', [Validators.email, Validators.required, Validators.pattern('[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+'), Validators.minLength(10)]),
    phone:new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+')]),
    address:new FormControl('', [Validators.required, Validators.maxLength(50)]),
    pass: new FormControl('',Validators.required),
    age: new FormControl('',[Validators.required,]),

  });
ngOnInit():void {
}
get f(): any {
  return this.myform.controls;
}
submitform(){
  this.submitted = true;
    if(this.myform.invalid) {
      alert('Something went wrong')
    }
    else {
      this.myservice.insertrecord(this.myform.value).subscribe((d) => {
        console.log(d);
      });
      this.myform.reset();
      // window.location.href="http://localhost:4200/auth";
    }
  
} 


}
