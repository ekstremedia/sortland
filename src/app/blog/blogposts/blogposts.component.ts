import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  constructor(private data: DataService) { }
  posts: any;
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.data.getBlogPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
