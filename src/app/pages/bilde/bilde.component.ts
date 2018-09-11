import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bilde',
  templateUrl: './bilde.component.html',
  styleUrls: ['./bilde.component.css']
})
export class BildeComponent implements OnInit {

  setId: any;
  photo: any;
  sizes: any;
  photo_url: any;
  comments: any;
  exif: any;
  context: any;
  time: any;
  aperture; focal; program; camera; iso; shutter; lens; mode; flash; metering; wb; expbias: any;

  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe(params => this.setId = params); }


  ngOnInit() {
    this.getInfo(this.setId);
    this.getSizes(this.setId);
    this.getExif(this.setId);
    this.getContext(this.setId);

  }

  getInfo(setId) {
    this.data.getFlickrPhotoInfo(setId.id).subscribe(
      data => {
        this.photo = data['photo'];
        if (this.photo && this.photo.comments && this.photo.comments._content && this.photo.comments._content > 0) {
          this.getComments(this.photo.id);
        }
        this.data.log('photo: ', this.photo);
      }
    );
  }
  getSizes(setId) {
    this.data.getFlickrPhotoSizes(setId.id).subscribe(
      data => {
        this.sizes = data['sizes']['size'];
        this.data.log('sizes: ', this.sizes);
        if (this.sizes[1]) { this.photo_url = this.sizes[1].source; }
        if (this.sizes[2]) { this.photo_url = this.sizes[2].source; }
        if (this.sizes[3]) { this.photo_url = this.sizes[3].source; }
        if (this.sizes[4]) { this.photo_url = this.sizes[4].source; }
        if (this.sizes[5]) { this.photo_url = this.sizes[5].source; }
        if (this.sizes[6]) { this.photo_url = this.sizes[6].source; }
        if (this.sizes[7]) { this.photo_url = this.sizes[7].source; }
        if (this.sizes[8]) { this.photo_url = this.sizes[8].source; }
        if (this.sizes[9]) { this.photo_url = this.sizes[9].source; }
      }
    );
  }
  getComments(photoId) {
    this.data.getFlickrComments(photoId).subscribe(
      data => {
        this.comments = data['comments']['comment'];
        this.data.log('comments: ', this.comments);
      }
    );
  }
  getContext(photoId) {
    this.data.getPhotoContext(photoId.id).subscribe(
      data => {
        this.context = data;
        this.data.log('context: ', this.context);
      }
    );
  }
  replaceAll(find, replace, str) { const re = new RegExp(find, 'g'); str = str.replace(re, replace); return str; }
  getExif(photoId) {
    this.data.getPhotoExif(photoId.id).subscribe(
      data => {
        this.exif = data['photo'];
        let cam: string;
        cam = this.exif.camera;
        const camut = this.replaceAll(' EOS', '', cam);
        this.camera = camut;
        for (const exifdata of this.exif.exif) {
          if (exifdata.tag === 'FNumber') { this.aperture = exifdata.clean._content; }
          if (exifdata.tag === 'FocalLength' && exifdata.clean) { this.focal = exifdata.clean._content; }
          if (exifdata.tag === 'FocalLength' && exifdata.raw) { this.focal = exifdata.raw._content; }
          // if (exifdata.tag === 'MeteringMode') { this.metering = exifdata.raw._content; }
          // if (exifdata.tag === 'Flash') { this.flash = exifdata.raw._content; }
          if (exifdata.tag === 'ISO') { this.iso = exifdata.raw._content; }
          // if (exifdata.tag === 'ExposureMode') { this.mode = exifdata.raw._content; }
          // if (exifdata.tag === 'WhiteBalance') { this.wb = exifdata.raw._content; }
          if (exifdata.tag === 'LensModel') {
            let lens: string;
            lens = exifdata.raw._content;
            const lensut = this.replaceAll(' USM', '', lens);
            this.lens = lensut;
          }
          if (exifdata.tag === 'ExposureTime') {
            this.shutter = exifdata.raw._content;
            if (this.shutter >= 1) {
              this.time = 'seconds';
            } else {
              this.time = 'second';
            }
          }
          // if (exifdata.tag === 'ExposureProgram') { this.program = exifdata.raw._content; }
          // if (exifdata.tag === 'ExposureCompensation') { this.expbias = exifdata.raw._content; }
        }
        this.data.log('exif: (' + photoId.id + ')', this.exif);
      }
    );
  }

}
