import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  flickr_api = 'c55156b848cb72c7e1dcbd12d3bc2e1d';
  flickr_secret = 'f4eb49927de21c1e';
  flickr_id = '93161966@N04';
  public getPosts() {
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';
    console.log('getPosts ran');
    return this.http.get(postUrl);
  }

  getFlickrFeed() {
    const extras = '&extras=url_o,views,machine_tags,geo';
    const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'
      + extras + '&id=' +
      this.flickr_id + '&jsoncallback=JSONP_CALLBACK';
    console.log('url: ', url);
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      data => data
    );
  }
  getFlickrSets() {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=8013632754e388f1c44febeea33afa2d&user_id=93161966%40N04&primary_photo_extras=url_sq%2C+url_t%2C+url_s%2C+url_m%2C+url_o&photo_ids=&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=c9ae2cfc56b5737b57e22d73b7d87e02';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=8013632754e388f1c44febeea33afa2d&user_id=93161966%40N04&primary_photo_extras=url_sq%2C+url_t%2C+url_s%2C+url_m%2C+url_o&format=json&nojsoncallback=1&api_sig=1ebe89bbb379a3e8da209f4dd88e3f22';

    console.log('seturl: ', seturl);
    return this.http.get(seturl).pipe(
      data => data
    );
  }


  getFlickrSetPhotos(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8013632754e388f1c44febeea33afa2d&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=c55156b848cb72c7e1dcbd12d3bc2e1d&photoset_id=' + setId + '&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken%2Cviews&format=json&nojsoncallback=1';
    console.log('seturl: ', seturl, 'setid: ', setId);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getFlickrPhotoInfo(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8013632754e388f1c44febeea33afa2d&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=8013632754e388f1c44febeea33afa2d&photo_id=' + setId + '&format=json&nojsoncallback=1';
    console.log('seturl: ', seturl, 'setid: ', setId);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getFlickrPhotoSizes(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8013632754e388f1c44febeea33afa2d&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8013632754e388f1c44febeea33afa2d&photo_id='+ setId +'&format=json&nojsoncallback=1';
    console.log('seturl: ', seturl, 'setid: ', setId);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getFlickrComments(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8013632754e388f1c44febeea33afa2d&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=8013632754e388f1c44febeea33afa2d&photo_id='+ setId +'&format=json&nojsoncallback=1';
    console.log('seturl: ', seturl, 'setid: ', setId);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  getPhotoExif(setId) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8013632754e388f1c44febeea33afa2d&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getExif&api_key=2a84f1619720ca7d89fbb6883e17c844&photo_id='+ setId +'&format=json&nojsoncallback=1';
    console.log('seturl: ', seturl, 'setid: ', setId);
    return this.http.get(seturl).pipe(
      data => data
    );
  }
}
