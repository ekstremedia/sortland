import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allbusinesses',
  templateUrl: './allbusinesses.component.html',
  styleUrls: ['./allbusinesses.component.css']
})
export class AllbusinessesComponent implements OnInit {

  constructor(public data: DataService) { }
  alleBedrifter: any;
  ngOnInit() {
    this.hentBedrifter();
  }

  hentBedrifter() {
    this.data.getBusinesses().subscribe(data => {
      this.alleBedrifter = data;
      this.data.log(data);
    });
  }
}
