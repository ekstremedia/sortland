import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes

        query(':enter', [
          style({ opacity: 0 }),
          stagger(20, [
            animate('0.2s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class GalleriesComponent implements OnInit {
  flickrSet: any;
  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit() {

    this.getSets();

  }

  getSets() {
    this.data.getFlickrSets().subscribe(
      data => {
        if (data['photosets']['photoset']) {
          this.flickrSet = data['photosets']['photoset'];
          console.log(this.flickrSet);
        }
      }
    );
  }

}
