import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  environment
} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  playlist_aurora = 'PL3E34C7679D9CD762';
  constructor(private http: HttpClient, private api: ApiService) { }

 origin = '&origin=http://localhost:4200';

  public getPosts() {
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';
    this.log('getPosts ran');
    return this.http.get(postUrl);
  }



  // YOUTUBE START

  getLastVideos() {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.api.getYoutubeApi() + '&type=video&channelId=' + this.api.getYoutubeUserId() + '&part=snippet,id&order=date&maxResults=30';
    this.log('yt-url: ', url);
    return this.http.get(url).pipe(
      data => data
    );
  }
  getPlaylist(id) {
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + id + '&key=' + this.api.getYoutubeApi() + '&order=date&maxResults=30';
    this.log('yt-playlist-url: ', url);
    return this.http.get(url).pipe(
      data => data
    );
  }
  getVideo(id) {
    // this.log(id);
    const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + this.api.getYoutubeApi() + this.origin;
    // const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.api.getYoutubeApi() + '&channelId=' + this.api.getYoutubeUserId() + '&part=snippet,id&id=' + id;
    this.log('videourl: ', url);
    return this.http.get(url).pipe(
      data => data
    );
  }

  // YOUTUBE END


  /// FLICKR START
  getFlickrFeed() {
    const extras = '&extras=url_o,views,machine_tags,geo';
    const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'
      + extras + '&id=' +
      this.api.getFlickrId() + '&jsoncallback=JSONP_CALLBACK';
    this.log('url: ', url);
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      data => data
    );
  }
  getFlickrSets() {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key='+this.api.getFlickrApi()+'&user_id=93161966%40N04&primary_photo_extras=url_sq%2C+url_t%2C+url_s%2C+url_m%2C+url_o&photo_ids=&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=c9ae2cfc56b5737b57e22d73b7d87e02';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=' + this.api.getFlickrApi() + '&user_id=93161966%40N04&primary_photo_extras=url_sq%2C+url_t%2C+url_s%2C+url_m%2C+url_o&format=json&nojsoncallback=1';

    this.log('seturl: ', seturl);
    return this.http.get(seturl).pipe(
      data => data
    );
  }


  getFlickrSetPhotos(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api.getFlickrApi()+'&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=' + this.api.getFlickrApi() + '&photoset_id=' + setId + '&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken%2Cviews&format=json&nojsoncallback=1';
    this.log('seturl: ', seturl);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getFlickrPhotoInfo(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api.getFlickrApi()+'&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=' + this.api.getFlickrApi() + '&photo_id=' + setId + '&format=json&nojsoncallback=1';
    this.log('seturl: ', seturl);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getFlickrPhotoSizes(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api.getFlickrApi()+'&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=' + this.api.getFlickrApi() + '&photo_id=' + setId + '&format=json&nojsoncallback=1';
    this.log('seturl: ', seturl);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getFlickrComments(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api.getFlickrApi()+'&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=' + this.api.getFlickrApi() + '&photo_id=' + setId + '&format=json&nojsoncallback=1';
    this.log('seturl: ', seturl);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getPhotoExif(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api.getFlickrApi()+'&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=' + this.api.getFlickrApi() + '&photo_id=' + setId + '&format=json&nojsoncallback=1';
    this.log('seturl: ', seturl);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getPhotoContext(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api.getFlickrApi()+'&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getAllContexts&api_key=' + this.api.getFlickrApi() + '&photo_id=' + setId + '&format=json&nojsoncallback=1';
    this.log('seturl: ', seturl);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  flickrSearch(searchText) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api.getFlickrApi()+'&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.api.getFlickrApi() + '&user_id=93161966%40N04&text=' + searchText + '&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken%2C+path_alias&format=json&nojsoncallback=1';
    this.log('searchtext: ', searchText);
    return this.http.get(seturl).pipe(
      data => data
    );
  }

  /// FLICKR END

  v() {
    return '0.0.3';
  }

  log(input,input2?) {
    if (environment.production === false) {
      if (input2) {
        this.log(input,input2);
      } else {
      this.log(input);
      }
    }
  }

}
