import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ApiformdataComponent } from './apiformdata/apiformdata.component';
import { ViewComponent } from './view/view.component';
import { EditemployeComponent } from './editemploye/editemploye.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    LandingpageComponent,
    ApiformdataComponent,
    ViewComponent,
    EditemployeComponent,
  ],
  imports: [
    CommonModule,MatToolbarModule,MatTooltipModule,NgxPaginationModule,
    DashbordRoutingModule,ReactiveFormsModule,FormsModule,MatPaginatorModule
  ]
})
export class DashbordModule { }
