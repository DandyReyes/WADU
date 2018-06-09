import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public photos = [];
  goals: any;

  constructor(public http: HttpClient, private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    // this.http.get('http://localhost:8080/getPhotos')
    //   .subscribe((response: any) => {
    //     console.log(response);
    //     this.photos = response;
    //   }, (error) => {
    //     console.log(error);
    //   });
      this._data.goal.subscribe(res => this.goals = res);
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
}
