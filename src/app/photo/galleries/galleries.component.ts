import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
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
        if (data.photosets.photoset) {
          this.flickrSet = data.photosets.photoset;
          console.log(this.flickrSet);
        }
      }
    );
  }

}
