import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnytimeService } from 'src/app/servies/anytime.service';
@Component({
  selector: 'app-applyform',
  templateUrl: './applyform.component.html',
  styleUrls: ['./applyform.component.scss']
})
export class ApplyformComponent implements OnInit {
  submitted = false;

  constructor(private service:AnytimeService) {
    // this.currentTime = new Date();
  }
  myform = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z]+')]),
    lastname: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z]+')]),
    phone: new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+')]),
    email: new FormControl('',[Validators.email, Validators.required, Validators.pattern('[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+'), Validators.minLength(10)]),
    course: new FormControl('',[Validators.required, Validators.maxLength(50)])
  });


  // currentTime: Date;
  // ngOnInit() {
  //   setInterval(() => {
  //     this.currentTime = new Date();
  //   }, 1000);
  // }

  get f(): any {
    return this.myform.controls;
  }
  ngOnInit(): void {
  }
  //submit fun
  submitform():void {

    this.submitted = true;
    if(this.myform.invalid) {
      alert('Something went wrong')
    }
    else {
      this.service.hiringapi(this.myform.value).subscribe((d) => {
        console.log(d);
      });
      this.myform.reset();
    }
  }

  options = [
    {name : "Cybersecurity"},
    {name : "UI/UX Designer"},
    {name : "Mean stack developer"},
    {name : "Mern stack developer"},
    {name : "Angular developer"},
    {name:'Beckend Developer'},
    {name:'Forntend Developer'}
  ]



}
