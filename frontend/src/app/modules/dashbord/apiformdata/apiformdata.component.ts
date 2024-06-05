import { Component, OnInit } from '@angular/core';
import { AnytimeService } from 'src/app/servies/anytime.service';

import * as AOS from 'aos';
@Component({
  selector: 'app-apiformdata',
  templateUrl: './apiformdata.component.html',
  styleUrls: ['./apiformdata.component.scss'],
 
})
export class ApiformdataComponent implements OnInit {

  

  getdatas:any
  p: string|number|undefined;
  constructor(private myservice:AnytimeService){
  
  }
    ngOnInit(): void {
      this.mymongodbgetalldata();
      AOS.init();
      
    }
  
  //delet record
    mydeletrecord(id:any): void {
     
      this.myservice.mydelete(id).subscribe(() => {
        console.log(id);
        alert("data is deleted");
        this.mymongodbgetalldata();
      })
      
    };
    mymongodbgetalldata(): void {
      this.myservice.getmyalldata().subscribe((d) => {
        this.getdatas=d;
        console.log(this.getdatas);
      })
    }

    
  
    
}
