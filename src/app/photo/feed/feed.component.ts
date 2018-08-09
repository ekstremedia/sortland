import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
import 'gsap';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  flickrFeed: any;
  instance: any;
  updateMasonryLayout: boolean;
  tl: any;

  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.tl = new TimelineMax({ delay: 0  });
    this.getFeed();
  }

  getFeed() {
    this.data.getFlickrFeed().pipe(finalize( () => {
      this.runAnim();
    })).subscribe(data => {
      this.flickrFeed = data['items'];
    },
    error => console.log('Error: ', error)
  );

  }

  runAnim() {
    console.log('Running animation');
    TweenMax.to('.animg', .5, { y: 225, css: { autoAlpha: 1 }, ease: Power1.easeOut });
  }

  idof(link) {
    const res = link.substr(-12, 11);
    return res;
  }
}
