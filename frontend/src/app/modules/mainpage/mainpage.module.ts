import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { MainpageRoutingModule } from './mainpage-routing.module';
import { MatdilogComponent } from './matdilog/matdilog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { TeamnologiesComponent } from './teamnologies/teamnologies.component';


@NgModule({
  declarations: [
    IndexpageComponent
    ,MatdilogComponent, ServicepageComponent, TeamnologiesComponent
  ],
  imports: [
    CommonModule,MatIconModule,MatButtonModule,MatToolbarModule,MatDialogModule,MatFormFieldModule,
    MainpageRoutingModule,MatInputModule,MatSelectModule,MatCardModule,FormsModule,ReactiveFormsModule
  ]
})
export class MainpageModule { }
