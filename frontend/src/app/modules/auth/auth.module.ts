import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReigesterComponent } from './reigester/reigester.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';



@NgModule({
  declarations: [
    
    ReigesterComponent,
    LoginpageComponent,
  
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,ReactiveFormsModule,FormsModule,
  ]
})
export class AuthModule { }
