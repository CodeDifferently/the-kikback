import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestorationRoutingModule } from './restoration-routing.module';
import { CarouselModule } from 'ngx-bootstrap';

import { RestorationComponent } from './page/restoration.component';



@NgModule({
  declarations: [RestorationComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    RestorationRoutingModule
  ]
})
export class RestorationModule {
  
 }
