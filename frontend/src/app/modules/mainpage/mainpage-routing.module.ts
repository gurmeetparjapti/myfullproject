import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { TeamnologiesComponent } from './teamnologies/teamnologies.component';

const routes: Routes = [
  {
    path:'',
    component:IndexpageComponent
  },{
    path:'service',
    component:ServicepageComponent
  },{
    path:'teampage',
    component:TeamnologiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
