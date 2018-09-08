import { AuthService } from './../../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-smb',
  templateUrl: './smb.component.html',
  styleUrls: ['./smb.component.css']
})
export class SmbComponent implements OnInit {
  @Input() business: any;
  setId: any;
  google: any;
  map_url: any;

  constructor(public sanitizer: DomSanitizer, private data: DataService, private route: ActivatedRoute, public authService: AuthService) {
    this.route.params.subscribe(params => this.setId = params);
  }

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
        if (data['map_url']) { this.map_url = data['map_url']; }
        if (data['google_id']) {
        this.data.getGoogleBusiness(data['google_id']).subscribe(
          bisdata => {
            this.google = bisdata;
            console.log(bisdata);
          });
      }
    }
    );
  }

  mapURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.map_url+'&output=embed');
  }

}
