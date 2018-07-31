import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  setId: any;
  photo: any;
  sizes: any;
  photo_url: any;
  comments: any;
  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe( params => this.setId = params ); }


  ngOnInit() {
    this.getInfo(this.setId);
    this.getSizes(this.setId);
  }

  getInfo(setId) {
    this.data.getFlickrPhotoInfo(setId.id).subscribe(
      data => {
        this.photo = data.photo;
         if (this.photo && this.photo.comments && this.photo.comments._content && this.photo.comments._content>0) {
          this.getComments(this.photo.id);
         }
          console.log('photo: ', this.photo);
        }
    );
  }
  getSizes(setId) {
    this.data.getFlickrPhotoSizes(setId.id).subscribe(
      data => {
        this.sizes = data.sizes.size;
          console.log('sizes: ', this.sizes);
          this.photo_url =  this.sizes[10].source;
        }
    );
  }
  getComments(photoId) {
    this.data.getFlickrComments(photoId).subscribe(
      data => {
        this.comments = data.comments.comment;
          console.log('comments: ', this.comments);
        }
    );
  }

}
