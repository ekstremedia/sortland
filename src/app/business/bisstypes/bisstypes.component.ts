import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bisstypes',
  templateUrl: './bisstypes.component.html',
  styleUrls: ['./bisstypes.component.css']
})
export class BisstypesComponent implements OnInit {
  setId: any;
  constructor(public data: DataService,private route: ActivatedRoute) { this.route.params.subscribe(params => this.setId = params); }
  alleBedrifter: any;
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
    this.data.getBusinessTypes(id).subscribe(data => {
      this.alleBedrifter = data;
      this.data.log(data);
    });
  }
}
