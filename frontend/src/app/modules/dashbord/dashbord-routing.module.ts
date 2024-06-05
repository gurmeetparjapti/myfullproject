import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ApiformdataComponent } from './apiformdata/apiformdata.component';
import { PortofolioComponent } from '../share/portofolio/portofolio.component';
import { ViewComponent } from './view/view.component';
import { EditemployeComponent } from './editemploye/editemploye.component';
import { ContactpageComponent } from '../share/contactpage/contactpage.component';
import { ApplyformComponent } from '../share/applyform/applyform.component';
import { CarrerpageComponent } from '../share/carrerpage/carrerpage.component';
import { BlogpageComponent } from '../share/blogpage/blogpage.component';
const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'apidata',
    component: ApiformdataComponent
  },
  {
    path: 'portfolio',
    component: PortofolioComponent
  },{
    path:'blog',
    component:BlogpageComponent
  },
  {
    path: 'apidata/view/:id',
    component: ViewComponent
  }, {
    path: 'apidata/edit/:id',
    component: EditemployeComponent
  }
  , {
    path: 'contact',
    component: ContactpageComponent
  },{
    path:'carrer',
    component:CarrerpageComponent
  },{
    path:'join',
    component:ApplyformComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
