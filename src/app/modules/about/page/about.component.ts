import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  itemsPerSlide = 3;
 

  constructor() { }

  ngOnInit() {
  }

}
