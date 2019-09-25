import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestorationRoutingModule } from './restoration-routing.module';
import { CarouselModule } from 'ngx-bootstrap';

import { RestorationComponent } from './page/restoration.component';
import { ComparisonComponent } from './component/comparison-slider.component'


@NgModule({
  declarations: [RestorationComponent, ComparisonComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    RestorationRoutingModule
  ]
})
export class RestorationModule {
  
 }
