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

  /******* variables for data service ********/
  public goals = [];
  public goalText;
  public itemCount;
  /******************************************/

  public hobby = [];      // Used to store the hobbies on the homepage
  public clickPict = 0;   // Incrementor for input validation

  // Boolean for changing the image of the arrows
  public changeImage = 'f';

  constructor(private _data: DataService, private modalService: NgbModal) { }
  @ViewChild('content') content;
  closeResult: string;

  ngOnInit() {
    // For Data service
    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }

  // Also used for data service
  ngAfterViewInit() {
    setTimeout(() => {
      this.open();
    });
  }

  // For the Modal
  open() {
    // For modal
    this.modalService.open(this.content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  /******************Start data service code*************************/
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
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
  /*******************End data service code*************************/

  // Used to pass information into array
  onClick() {
    // Trims extra spaces
    this.userInput.data = this.userInput.data.trim();
    this.userData.push(this.userInput);
    // Reset input data
    this.userInput = {
      data: '',
    };
  }

  // This function disables the input area
  returnTrue() {
    if (this.counter === 5) {
      return true;
    } else {
      return false;
    }
  }

  // This is to refresh the array, incrementor
  // when it is clicked, and the color of the images
  refreshAll() {
    this.hobby = [];
    this.clickPict = 0;

    const bake = document.getElementById('baking') as HTMLImageElement;
    bake.src = '../../assets/baking_color_text.jpg';

    const bike = document.getElementById('biking') as HTMLImageElement;
    bike.src = '../../assets/biking_color_text.jpg';

    const theatre = document.getElementById('theatre') as HTMLImageElement;
    theatre.src = '../../assets/theatre_color_text.jpg';

    const music = document.getElementById('music') as HTMLImageElement;
    music.src = '../../assets/music_color_text.jpg';

    const creating = document.getElementById('creating') as HTMLImageElement;
    creating.src = '../../assets/creating_color_text.jpg';

    const writing = document.getElementById('writing') as HTMLImageElement;
    writing.src = '../../assets/writing_color_text.jpg';

    const drawing = document.getElementById('drawing') as HTMLImageElement;
    drawing.src = '../../assets/drawing_color_text.jpg';

    const photography = document.getElementById('photography') as HTMLImageElement;
    photography.src = '../../assets/photography_color_text.jpg';

    const socializing = document.getElementById('socializing') as HTMLImageElement;
    socializing.src = '../../assets/socializing_color_text.jpg';
  }

  // I used this for input validation
  // of only clicking three images
  clickPic(topic) {
    if (this.clickPict <= 2) {
      this.clickPict++;
      console.log(this.clickPict);
      console.log(topic);
      this.hobby.push(topic);
      console.log(this.hobby);
    }
  }

  // Used for returning a true or false value to disable
  // every picture on the homepage after pressing three pictures
  returnBool() {
    if (this.clickPict >= 3) {
      return true;
    } else {
      return false;
    }
  }

  // Used to show results button when three images are clicked
  returnHidden() {
    if (this.clickPict >= 3) {
      return false;
    } else {
      return true;
    }
  }

  // I used this to change the image of my picture
  // The only thing I was missing was the "as HTMLImageElement"
  changeBake() {
    const bake = document.getElementById('baking') as HTMLImageElement;
    bake.src = '../../assets/baking_gray_text.jpg';
  }

  changeBiking() {
    const bike = document.getElementById('biking') as HTMLImageElement;
    bike.src = '../../assets/biking_gray_text.jpg';
  }

  changeTheatre() {
    const theatre = document.getElementById('theatre') as HTMLImageElement;
    theatre.src = '../../assets/theatre_gray_text.jpg';
  }

  changeMusic() {
    const music = document.getElementById('music') as HTMLImageElement;
    music.src = '../../assets/music_gray_text.jpg';
  }

  changeCreating() {
    const creating = document.getElementById('creating') as HTMLImageElement;
    creating.src = '../../assets/creating_gray_text.jpg';
  }

  changeWriting() {
    const writing = document.getElementById('writing') as HTMLImageElement;
    writing.src = '../../assets/writing_gray_text.jpg';
  }

  changeDrawing() {
    const drawing = document.getElementById('drawing') as HTMLImageElement;
    drawing.src = '../../assets/drawing_gray_text.jpg';
  }

  changePhotography() {
    const photography = document.getElementById('photography') as HTMLImageElement;
    photography.src = '../../assets/photography_gray_text.jpg';
  }

  changeSocializing() {
    const socializing = document.getElementById('socializing') as HTMLImageElement;
    socializing.src = '../../assets/socializing_gray_.jpg';
  }

  changeIcon() {
    const arrow = document.getElementById('arrowDU') as HTMLImageElement;
    if (this.changeImage === 'f') {
    arrow.src = '../../assets/up-chevron-button.png';
    this.changeImage = 't';
    } else if (this.changeImage === 't') {
    arrow.src = '../../assets/chevron-sign-down.png';
    this.changeImage = 'f';
    }
  }
}
