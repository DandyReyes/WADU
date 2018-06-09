import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import * as $ from 'jquery';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Counting variable used for
  public counter = 0;
  public userData = [];
  public userInput = {
    data: '',
  };
  public countDown = 5;
  public hoverIndex;

  // variables for data service
  public goals = [];
  public goalText;
  public itemCount;

  public clickPict = 0;


  constructor(private _data: DataService, private modalService: NgbModal) { }
  @ViewChild('content') content;
  closeResult: string;
  ngOnInit() {
    // For Data service
    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }

  ngAfterViewInit() {
    setTimeout(() => {
  this.open();
  });
  }

  open() {
    // For modal
    this.modalService.open(this.content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
  clickPic() {
    this.clickPict++;
    if (this.clickPict) {
      console.log(this.clickPict);
    }
  }
}
