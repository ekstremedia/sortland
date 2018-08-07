import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
videos: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getVideos();
  }


  getVideos() {
    this.data.getLastVideos().subscribe(data => {
      this.videos = data['items'];
    });
  }
}
