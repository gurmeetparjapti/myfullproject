import { Component ,OnInit,ElementRef} from '@angular/core';
import { AnytimeService } from 'src/app/servies/anytime.service';
import {FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editemploye',
  templateUrl: './editemploye.component.html',
  styleUrls: ['./editemploye.component.scss']
})
export class EditemployeComponent implements OnInit  {
  constructor(private abc: FormBuilder, private service:AnytimeService,private route:ActivatedRoute,private el: ElementRef,){}
  mydata:any;
  myid:any;
  private isPasswordVisible = false;
    ngOnInit(): void { 
      this.myid = this.route.snapshot.paramMap.get('id');
     this.myupdate;
     this.singleuserdata();
    }
    myform = this.abc.group({
      userID:new FormControl({ value: '', disabled: true } ),
      username: new FormControl(),
      email: new FormControl(),
      age: new FormControl(),
      phone: new FormControl(),
      pass: new FormControl(),
      address:new FormControl()
    })
    myupdate():void{
      // console.log(this.myform.value);
      this.service.updatedata(this.myform.value,this.myid).subscribe((u)=>{
        // console.log(u);
        this.myform.reset();
        alert("your data is updated")
        window.location.href="http://localhost:4200/dashboard/landingpage/apidata";
      
      })
    }
    singleuserdata():void{
      this.service.singleuser(this.myid).subscribe((sd)=>{
        console.log(sd);
        this.mydata=sd;
        this.myform.patchValue({
          userID:this.mydata[0]._id,
          username:this.mydata[0].username,
          email:this.mydata[0].email,
          age:this.mydata[0].age,
          phone:this.mydata[0].phone,
          pass:this.mydata[0].pass,
          address:this.mydata[0].address
        })
      })
  }
  
  passwordVisible = false;
    password: string = ''; // Your password field value
  
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
  

}
