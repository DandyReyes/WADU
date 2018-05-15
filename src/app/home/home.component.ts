import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public counter = 0;
  public userInput = true;
  public submits;
  public submit = [];
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    // if (this.userInput) {
    this.counter++;
    // }
    
  }
}
