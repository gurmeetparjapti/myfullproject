import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
 ngOnInit(): void {
  AOS.init();
 }
}
