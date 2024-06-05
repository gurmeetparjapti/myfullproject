import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AnytimeService } from 'src/app/servies/anytime.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit{
  myloc: any;
  hide = true;
  constructor( private service:AnytimeService){}
  myform=new FormGroup({
   username: new FormControl(),
   email:new FormControl(),
   pass:new FormControl(),
  });
  ngOnInit():void {}
  //submitdata
  mysubmit()
{
 this.service.loginuser(this.myform.value).subscribe((d)=>{
   console.log(d);
     if(d)
     {
       this.myloc = this.myform.value.username;
       sessionStorage.setItem("username",this.myloc);
       this.myform.reset();
       alert('welcome to my webste')
           window.location.href="http://localhost:4200/dashboard";
     } 
     else
     {
       alert("wrong password");
     }
 })

}
}
