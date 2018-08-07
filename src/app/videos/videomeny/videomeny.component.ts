import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'video-menu',
  templateUrl: './videomeny.component.html',
  styleUrls: ['./videomeny.component.css']
})
export class VideomenyComponent implements OnInit {
  params: any;
  sisteVideoer = 'Siste videoer';
  auroras = 'Aurora Borealis';
  vossajazz = 'Vossa Jazz';
  constructor(public router: Router, private route: ActivatedRoute) { this.route.params.subscribe(params => this.params = params); }

  ngOnInit() {
  }

}
