import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  itemsPerSlide = 3;
 

  constructor() { }

  ngOnInit() {
  }

}
