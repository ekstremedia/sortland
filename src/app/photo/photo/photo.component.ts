import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

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
  exif: any;
  aperture; focal; program; camera; iso; shutter; lens; mode; flash; metering; wb; expbias: any;

  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe(params => this.setId = params); }


  ngOnInit() {
    this.getInfo(this.setId);
    this.getSizes(this.setId);
    this.getExif(this.setId);
  }

  getInfo(setId) {
    this.data.getFlickrPhotoInfo(setId.id).subscribe(
      data => {
        this.photo = data.photo;
        if (this.photo && this.photo.comments && this.photo.comments._content && this.photo.comments._content > 0) {
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
        this.photo_url = this.sizes[10].source;
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
  getExif(photoId) {
    this.data.getPhotoExif(photoId.id).subscribe(
      data => {
        this.exif = data.photo;
        this.camera = this.exif.camera;
        for (const exifdata of this.exif.exif) {
          if (exifdata.tag === 'FNumber') { this.aperture = exifdata.clean._content; }
          if (exifdata.tag === 'FocalLength') { this.focal = exifdata.clean._content; }
          if (exifdata.tag === 'MeteringMode') { this.metering = exifdata.raw._content; }
          if (exifdata.tag === 'Flash') { this.flash = exifdata.raw._content; }
          if (exifdata.tag === 'ISO') { this.iso = exifdata.raw._content; }
          if (exifdata.tag === 'ExposureMode') { this.mode = exifdata.raw._content; }
          if (exifdata.tag === 'WhiteBalance') { this.wb = exifdata.raw._content; }
          if (exifdata.tag === 'LensModel') { this.lens = exifdata.raw._content; }
          if (exifdata.tag === 'ExposureTime') { this.shutter = exifdata.raw._content; }
          if (exifdata.tag === 'ExposureProgram') { this.program = exifdata.raw._content; }
          if (exifdata.tag === 'ExposureCompensation') { this.expbias = exifdata.raw._content; }
        }
        console.log('exif: (' + photoId.id + ')', this.exif);
      }
    );
  }

}
