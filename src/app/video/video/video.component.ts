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
  videoid: any;
  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe(params => this.videoid = params); }

  ngOnInit() {
    this.getVideo();
  }
 

  getVideo() {
    this.data.getVideo(this.videoid).subscribe(data => {
      this.video = data['items'][0]['snippet'];
    });
  }

}
