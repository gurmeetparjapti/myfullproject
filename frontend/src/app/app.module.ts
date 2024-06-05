import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink,RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';
import { FootterComponent } from './modules/share/footter/footter.component';
import { MatMenuModule } from '@angular/material/menu';
import { PortofolioComponent } from './modules/share/portofolio/portofolio.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ErrorpageComponent } from './modules/share/errorpage/errorpage.component';
import { ContactpageComponent } from './modules/share/contactpage/contactpage.component';
import { ApplyformComponent } from './modules/share/applyform/applyform.component';
import { CarrerpageComponent } from './modules/share/carrerpage/carrerpage.component';
import { MainComponent } from './layout/main/main.component';
import { HeraderComponent } from './modules/share 2/herader/herader.component';
import { FotterComponent } from './modules/share 2/fotter/fotter.component';
import { BlogpageComponent } from './modules/share/blogpage/blogpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FullpageComponent,
    BlankpageComponent,
    FootterComponent,
    PortofolioComponent,
    ErrorpageComponent,
    ContactpageComponent,
    ApplyformComponent,
    CarrerpageComponent,
    MainComponent,
    HeraderComponent,
    FotterComponent,
    BlogpageComponent,
   
    
    
  ],
  imports: [
    BrowserModule,MatSidenavModule,MatListModule,MatExpansionModule,MatMenuModule,
    AppRoutingModule,MatIconModule,MatToolbarModule,RouterLink,RouterModule,HttpClientModule,
    BrowserAnimationsModule,FlexLayoutModule, MatButtonModule, MatInputModule,
     MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule,FormsModule,CanvasJSAngularChartsModule
     ,NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
