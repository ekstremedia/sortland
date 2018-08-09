import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
import 'gsap';
import { finalize } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
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
export class FeedComponent implements OnInit {
  flickrFeed: any;
  instance: any;
  updateMasonryLayout: boolean;
  tl: any;
  show = false;
  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.tl = new TimelineMax({ delay: 0  });
    this.getFeed();
  }
  get stateName() {
    return this.show ? 'show' : 'hide';
  }


  toggle() {
    this.show = !this.show;
  }
  getFeed() {
    this.data.getFlickrFeed().pipe(finalize( () => {
      // setTimeout( this.runAnim, 0 );
      // this.runAnim();
    })).subscribe(data => {
      this.flickrFeed = data['items'];
    },
    error => console.log('Error: ', error)
  );

  }

  runAnim() {
    console.log('Running animation');
    // TweenMax.to('.animg', .5, { y: 225, css: { autoAlpha: 1 }, ease: Power1.easeOut });
    TweenMax.from('.animg', .4, { css: { x:-30 }, ease: Power1.easeOut });
  }

  idof(link) {
    const res = link.substr(-12, 11);
    return res;
  }
}
