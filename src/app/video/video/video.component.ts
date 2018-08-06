import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video: any;
  player: YT.Player;
  videoid: any;
  spillpause = '[Spill av video]';
  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe(params => this.videoid = params['id']); }

  ngOnInit() {
    this.getVideo();
    this.setVideo('test');
  }

  getVideo() {
    this.data.getVideo(this.videoid).subscribe(data => {
      this.video = data['items'][0]['snippet'];
    });
  }
  savePlayer(player) {
    this.player = player;
    // console.log('player instance', player);
  }
  startVid() {
    if (this.player.getPlayerState() === 1) {
      this.player.pauseVideo();
      this.spillpause = '[Spill av video]';
    } else {
      this.player.playVideo();
      this.spillpause = '[Pause video]';
    }
  }

  onStateChange(event) {
    console.log('player state', event.data);
    if (this.player.getPlayerState() === 1) {
      this.spillpause = '[Pause video]';
    } else {
      this.spillpause = '[Spill av video]';
    }
  }

  setVideo(id) {

    // 2. This code loads the IFrame Player API code asynchronously.
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: 360,
        width: 640,
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    let done = false;
    function onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }

  }



}
