import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-addbiss',
  templateUrl: './addbiss.component.html',
  styleUrls: ['./addbiss.component.css']
})
export class AddbissComponent implements OnInit {

  constructor(public data: DataService, public authService: AuthService) { }
  bsValid; googleIdBoks; finnes; business: any;
  ngOnInit() {
    this.bsValid = true;
    this.finnes = false;
    this.googleIdBoks = '';
  }

  clear() {
    this.bsValid = true;
    this.finnes = null;
    this.business = null;
  }
  check() {
    this.clear();
    this.data.log(this.googleIdBoks);
      this.data.lagreBedrift(this.googleIdBoks).subscribe(
        data => {
          if (data['valid'] === 'ja') {
            this.bsValid = true;
          } else {
            this.bsValid = false;
          }
          this.data.log(data);
          if (data['finnes'] === 'ja') {
            this.finnes = 'ja';
          } else {
            this.finnes = 'nei';
          }
          if (data['bedrift']) {
            this.business = data['bedrift'];
          }
          // if (data && data['name']) {
          //   this.bsFound = true;
          // } else {
          //   this.bsFound = false;
          // }
        }
      );
    }
}
