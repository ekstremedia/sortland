import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
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
export class PlaylistComponent implements OnInit {
  videos: any;
  videoid: any;
  playlistTitle: any;
  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe(params => this.videoid = params['id']); }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {

        const id = params.get('id');
        console.log(id);

        this.getPlaylist(id);
      }
    );

  }

  getPlaylist(videoid) {
    let playlistid;
    if (videoid === 'auroras') {
      playlistid = 'PL3E34C7679D9CD762';
      this.playlistTitle = 'Aurora Borealis timelapse';
    }
    if (videoid === 'vossajazz') {
      playlistid = 'PLcVY23tSXgYfrX25u9htXptRZN6tlejjj';
      this.playlistTitle = 'Vossa Jazz medarbeidarfilmer';
    }
    this.data.getPlaylist(playlistid).subscribe(data => {
      this.videos = data['items'];
    });
  }
}
