import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'photo-menu',
  templateUrl: './photomeny.component.html',
  styleUrls: ['./photomeny.component.css']
})
export class PhotomenyComponent implements OnInit {

  params: any;
  sisteBilder = 'Nyeste';
  gallerier = 'Gallerier';
  longExpo = 'Long exposure Voss';
  auroras = 'Aurora Borealis';
  constructor(public router: Router, private route: ActivatedRoute) { this.route.params.subscribe(params => this.params = params); }

  ngOnInit() {
  }

}
