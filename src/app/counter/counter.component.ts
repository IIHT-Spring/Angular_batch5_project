import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  product = {
    name: "Samsung Galaxy s22",
    color: "Prism white",
    Price : 999,
    launchedOn: Date.now()
    
    
  }

  pi = 3.14159265;
  // newDate()

  constructor() { }

  ngOnInit(): void {
  }

}
