import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
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
        console.log(id)

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
