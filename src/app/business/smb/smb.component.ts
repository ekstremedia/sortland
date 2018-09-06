import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smb',
  templateUrl: './smb.component.html',
  styleUrls: ['./smb.component.css']
})
export class SmbComponent implements OnInit {
  @Input() business: any;
  setId: any;
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
        // this.business = data;
        // this.data.log('business: ', this.business);
        // console.log('business: ', this.business);
      }
    );
  }
}
