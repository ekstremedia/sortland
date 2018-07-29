import { DataService } from './../../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit, OnDestroy {

  posts: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getTheData();
  }
  ngOnDestroy() {

  }
  getTheData() {
    this.data.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
