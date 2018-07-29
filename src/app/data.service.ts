import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getPosts() {
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';
    console.log('getPosts ran');
    return this.http.get(postUrl);
  }
}
