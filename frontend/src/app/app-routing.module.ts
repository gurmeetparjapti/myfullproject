import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';
import { ErrorpageComponent } from './modules/share/errorpage/errorpage.component';
import { MainComponent } from './layout/main/main.component';
const routes: Routes = [
  {
    path: '',
    children: [ 
      { path: '', redirectTo: 'indexpage', pathMatch: 'full' },
      {
        path: 'indexpage', component: MainComponent,
        loadChildren: () => import('./modules/mainpage/mainpage.module').then(m => m.MainpageModule)
      } 
    ]
  },
  {
    path: 'auth',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login', component: BlankpageComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'dashboard',
    children: [
      { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
      {
        path: 'landingpage', component: FullpageComponent,
        loadChildren: () => import('./modules/dashbord/dashbord.module').then(m => m.DashbordModule)
      }
    ]
  },
  {
    path: '**',
    component: ErrorpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
