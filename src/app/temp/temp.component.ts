import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  cards = Array.from(
    {length: 1000}
  ).map((value, i) => `Item ${i}`);

  constructor() { }

  ngOnInit() {
  }

}
