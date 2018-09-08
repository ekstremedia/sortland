import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-ledigestillinger',
  templateUrl: './ledigestillinger.component.html',
  styleUrls: ['./ledigestillinger.component.css']
})
export class LedigestillingerComponent implements OnInit {
  setId: any;
  constructor(public data: DataService) {  }
  stillinger: any;
  stillingen: any;

  ngOnInit() {
    this.getStillinger();
  }

  getStillinger() {
    this.data.getStillinger().subscribe(data => {
      this.stillinger = data;
      this.data.log(data);
    });
  }
  openNo(business) {
    return this.data.openNo(business);
  }

  setStilling(stilling) {
    this.stillingen = stilling['description'];
  }
} 
