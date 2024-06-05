import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AnytimeService } from 'src/app/servies/anytime.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  constructor(private myservice:AnytimeService,private route:ActivatedRoute){

  }
    ngOnInit(): void {
      this.myid =this.route.snapshot.paramMap.get('id');
      console.log(this.myid);
      this.mysingledata();
    }
  
    record:any;
  myid:any;
  
  //view work
  mysingledata():void{
   this.myservice.singledata(this.myid).subscribe((x)=>{
      this.record = x;
      console.log(this.record);
    })
     
  
  }
}
