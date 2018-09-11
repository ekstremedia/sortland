import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
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
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
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
