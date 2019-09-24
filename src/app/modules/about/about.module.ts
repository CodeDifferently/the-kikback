import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CarouselModule } from 'ngx-bootstrap';

import { AboutComponent } from './page/about.component';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    AboutRoutingModule
  ]
})
export class AboutModule {
  
 }
