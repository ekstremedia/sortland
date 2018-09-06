import { AuthService } from './../../auth.service';
import { DataService } from './../../data.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarToggler') navbarToggler: ElementRef;
  isNavbarCollapsed: any;
  constructor(public data: DataService, public router: Router, public authService: AuthService) { }
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
