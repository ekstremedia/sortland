import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  flickrFeed: any;
  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit() {

    this.getFeed();

  }

  getFeed() {
    this.data.getFlickrFeed().subscribe(
      data => {
          this.flickrFeed = data['items'];
          console.log(this.flickrFeed);
      }
  );
  }
  idof(link) {
    const res = link.substr(-12, 11);
    return res;
  }
}
