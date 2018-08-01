import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {
  setId: any;
  set: any;
  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe( params => this.setId = params ); }

  ngOnInit() {
    this.getSetImages(this.setId);
  }

  getSetImages(setId) {
    this.data.getFlickrSetPhotos(setId.id).subscribe(
      data => {
        this.set = data['photoset'];
          console.log('set: ', this.set);
        }
    );
  }

}
