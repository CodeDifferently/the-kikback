import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemsPerSlide = 3;
 
  slides = [
    {image: "../../../../../../assets/img/Teal4s.jpg"},
    {image: 'assets/images/nature/2.jpg'},
    {image: 'assets/images/nature/3.jpg'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
