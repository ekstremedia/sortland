import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  setId: any;
  business: any;
  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe(params => this.setId = params); }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      const id = params.get('slug');
      this.data.log('id: ',id);
      this.getBusiness(id);
    }
  );
  }

  getBusiness(setId) {
    this.data.log(setId);
    this.data.getBusiness(setId).subscribe(
      data => {
        this.business = data;
        this.data.log('business: ', this.business);
      }
    );
  }
}
