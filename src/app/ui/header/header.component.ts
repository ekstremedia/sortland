import { DataService } from './../../data.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarToggler') navbarToggler: ElementRef;
  isNavbarCollapsed: any;
  constructor(public data: DataService) { }
  v: any;
  ngOnInit() {
    this.v = this.data.v();
  }
  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
