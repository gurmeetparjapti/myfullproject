import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit{
 //all strings use in templates
 submitted=false;

 subscribe=new FormGroup({
  subscribe:new FormControl()
 })
 
 submit(){
      console.log(this.subscribe.value)
    this.subscribe.reset()
    alert('thanks to subscribe my page')
 }










 titel:string="This is my working project"

 count: number = 0;
 count1: number = 0;
 rattingvalue:number=0;
 ngOnInit() {
   this.animateCount();
 this. animateCountsecond();
 this.ratting();
 AOS.init();
 
 }

 animateCount() {
   const targetCount = 1000; // Set your target count here
   const duration = 3000; // Animation duration in milliseconds
   const interval = 30;
   const steps = duration / interval;
   const step = (targetCount - this.count) / steps;

   const countInterval = setInterval(() => {
     this.count += step;
     if (this.count >= targetCount) {
       this.count = targetCount;
       clearInterval(countInterval);
     }
   }, interval);
 }
 //second
 animateCountsecond() {
   const targetCount = 200; // Set your target count here
   const duration = 10000; // Animation duration in milliseconds
   const interval = 10;
   const steps = duration / interval;
   const step = (targetCount - this.count) / steps;

   const countInterval = setInterval(() => {
     this.count1 += step;
     if (this.count1 >= targetCount) {
       this.count1 = targetCount;
       clearInterval(countInterval);
     }
   }, interval);
   
 }
    ratting() {
   const targetCount = 9; // Set your target count here
   const duration = 1000; // Animation duration in milliseconds
   const interval = 10;
   const steps = duration / interval;
   const step = (targetCount - this.count) / steps;

   const countInterval = setInterval(() => {
     this.rattingvalue += step;
     if (this.rattingvalue >= targetCount) {
       this.rattingvalue = targetCount;
       clearInterval(countInterval);
     }
   }, interval);
 }




}
