import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-cdk-scroll',
  templateUrl: './cdk-scroll.component.html',
  styleUrls: ['./cdk-scroll.component.css']
})
export class CdkScrollComponent implements OnInit {

  list = Array.from(
    {
      length: 10000
    }
  ).map((value, i) => `Item # ${i}`);

  constructor() { }

  ngOnInit() {
  }

}
