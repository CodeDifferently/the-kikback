import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { TKBStealsComponent } from './component/tkb-steals.component';
import { CarouselModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [HomeComponent, TKBStealsComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    HomeRoutingModule
  ]
})
export class HomeModule {

  
 }
