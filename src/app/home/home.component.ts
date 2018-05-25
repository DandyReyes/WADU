import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  // Counting variable used for
  public counter = 0;
  public userData = [];
  public userInput = {
    data: '',
  };
  public countDown = 5;
  public hoverIndex;
  public goals = [];
  //
  public goalText;
  public _data;
  public itemCount;

  constructor(private_data: DataService) { }
  ngOnInit() {
    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
  onClick() {
    // Trims extra spaces
    this.userInput.data = this.userInput.data.trim();
    this.userData.push(this.userInput);
    // Input validation for empty inputs
    if (this.userInput.data === '') {
      console.log('You did not put anything bro');
    } else {
      this.counter++;
      this.countDown -= 1;
    }
    // Reset input data
    this.userInput = {
      data: '',
    };
  }
  // This function shows the pop-up menu
  myFunction() {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
  }
  mouseLeave() {
    return false;
  }
  // This function disables the input area
  returnTrue() {
   if (this.counter === 5) {
     return true;
   } else {
     return false;
   }
  }
}


