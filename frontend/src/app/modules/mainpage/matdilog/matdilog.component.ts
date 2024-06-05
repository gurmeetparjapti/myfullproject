import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnytimeService } from 'src/app/servies/anytime.service';

@Component({
  selector: 'app-matdilog',
  templateUrl: './matdilog.component.html',
  styleUrls: ['./matdilog.component.scss']
})
export class MatdilogComponent {


  myloc: any;
  hide = true;
  constructor( private service:AnytimeService){}
  myform=new FormGroup({
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
