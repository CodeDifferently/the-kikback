import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CarouselModule } from 'ngx-bootstrap';

import { ShopComponent } from './page/shop.component';



@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    ShopRoutingModule
  ]
})
export class ShopModule {
  
 }
