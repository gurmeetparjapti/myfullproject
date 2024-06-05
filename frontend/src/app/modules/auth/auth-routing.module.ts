import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReigesterComponent } from './reigester/reigester.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent
  },{
    path: 'register',
    component: ReigesterComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
