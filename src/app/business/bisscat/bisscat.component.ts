import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bisscat',
  templateUrl: './bisscat.component.html',
  styleUrls: ['./bisscat.component.css']
})
export class BisscatComponent implements OnInit {
  setId: any;
  constructor(public data: DataService,private route: ActivatedRoute) { this.route.params.subscribe(params => this.setId = params); }
  kategori: any;
  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      const id = params.get('id');
      this.data.log('id: ',id);
      this.hentBedrifter(id);

      // this.getBusiness(id);
    }
  );
  }

  hentBedrifter(id) {
    this.data.getBusinessCategories(id).subscribe(data => {
      this.kategori = data;
      this.data.log(data);
    });
  }
  openNo(business) {
    return this.data.openNo(business);
  }
}
