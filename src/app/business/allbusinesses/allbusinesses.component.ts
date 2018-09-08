import { Subscription } from 'rxjs';
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
  sok: string;

  ngOnInit() {
    this.sok = '';
    this.hentBedrifter();
    // this.now = new Date();
    // console.log(this.dagLink(this.now));
    // console.log(this.now);
  }

  hentBedrifter() {
    this.data.getBusinesses().subscribe(data => {
      this.alleBedrifter = data;
      this.data.log(data);
    });
  }


  openNo(business) {
    return this.data.openNo(business);
  }
  treff(sok) {
    const filtered: any[] = [];
      for(const biss of this.alleBedrifter) {
          const tit = biss.title;
          const slug = biss.slug;
          let catIncluded = false;
          const soklol = sok.toLowerCase();
          if (biss['businesscategory']) {
            for(const category of biss['businesscategory']) {
              if ((category['title'].toLowerCase().indexOf(soklol) >= 0) || (category['slug'].toLowerCase().indexOf(soklol) >= 0)) {
                catIncluded = true;
              }
            }
          }

        if (((tit.toLowerCase().indexOf(soklol) >= 0) || (slug.toLowerCase().indexOf(soklol) >= 0)) || (catIncluded)) {
          filtered.push(biss);
        }
    }
    return filtered;

  }
}
