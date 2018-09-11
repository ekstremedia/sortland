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
  page: number;
  constructor(private http: HttpClient, private api: ApiService) { 
   
  }

 origin = '&origin=http://localhost:4200';

  public getPosts() {
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';
    this.log('getPosts ran');
    return this.http.get(postUrl);
  }


  // NAV START
  getStillinger() {
      let seturl = null;
      if (environment.production === false) {
        seturl = 'http://localhost:81/sortland/api/getStillinger';
      } else {
        seturl = 'api/getStillinger';
      }
      return this.http.get(seturl).pipe(
        data => data
      );
    }
  
  // NAV END

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

  pageSet(page) {
    console.log('set page: ',page);
    this.page = page;
  }

  pageGet() {
    console.log(this.page);
    if (this.page === undefined) { this.page = 1; }
    if (isNaN(this.page)) { this.page = 1; }
    return this.page;
  }

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
  flickrSearchAll(searchText) {
    // const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api.getFlickrApi()+'&photoset_id='+ setId +'&user_id=93161966%40N04&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken&format=json&nojsoncallback=1&auth_token=72157693865132550-c00dad37f918e68d&api_sig=ad5e9913499c842c36d8b7ad3e5f81eb';
    const seturl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.api.getFlickrApi() + '&text=' + searchText + '&per_page=16&page='+this.pageGet()+'&extras=url_o%2Curl_s%2Curl_sq%2Cdate_taken%2C+path_alias&format=json&nojsoncallback=1';
    this.log('searchtext: ', searchText);
    return this.http.get(seturl).pipe(
      data => data
    );
  }

  /// FLICKR END


  log(input,input2?) {
    if (environment.production === false) {
      if (input2) {
        console.log(input,input2);
      } else {
      console.log(input);
      }
    }
  }

  /// BLOG START

  getBlogPosts() {
    let seturl = null;
    if (environment.production === false) {
      seturl = 'http://localhost:81/sortland/api/blogPosts';
    } else {
      seturl = 'api/blogPosts';
    }
    return this.http.get(seturl).pipe(
      data => data
    );
  }


  /// BLOG END


  /// AURORA START

  noaaKindexByMinute() {
  const seturl = 'http://services.swpc.noaa.gov/products/noaa-estimated-planetary-k-index-1-minute.json';
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  noaaKindex() {
  const seturl = 'http://services.swpc.noaa.gov/products/noaa-planetary-k-index.json';
    return this.http.get(seturl).pipe(
      data => data
    );
  }
  noaaKindexForecast() {
  const seturl = 'http://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json';
    return this.http.get(seturl).pipe(
      data => data
    );
  }

  /// AURORA END

/// BEDRIFTER START

getBusinesses() {
  let seturl = null;
  if (environment.production === false) {
    seturl = 'http://localhost:81/sortland/api/allBusinesses';
  } else {
    seturl = 'api/allBusinesses';
  }
  return this.http.get(seturl).pipe(
    data => data
  );
}
getBusinessTypes(id) {
  let seturl = null;
  if (environment.production === false) {
    seturl = 'http://localhost:81/sortland/api/allBusinessTypes/'+id;
  } else {
    seturl = 'api/allBusinessTypes/'+id;
  }
  return this.http.get(seturl).pipe(
    data => data
  );
}
getBusinessCategories(id) {
  let seturl = null;
  if (environment.production === false) {
    seturl = 'http://localhost:81/sortland/api/allBusinessCategories/'+id;
  } else {
    seturl = 'api/allBusinessCategories/'+id;
  }
  return this.http.get(seturl).pipe(
    data => data
  );
}

getBusiness(slug) {
  let seturl = null;
  if (environment.production === false) {
    seturl = 'http://localhost:81/sortland/api/business/'+slug;
  } else {
    seturl = 'api/business/'+slug;
  }
  return this.http.get(seturl).pipe(
    data => data
  );
}
getGoogleBusiness(slug) {
  let seturl = null;
  if (environment.production === false) {
    seturl = 'http://localhost:81/sortland/api/googleId/'+slug;
  } else {
    seturl = 'api/googleId/'+slug;
  }
  return this.http.get(seturl).pipe(
    data => data
  );
}

lagreBedrift(gid) {
  let seturl = null;
  if (environment.production === false) {
    seturl = 'http://localhost:81/sortland/api/lagreBedrift/'+gid;
  } else {
    seturl = 'api/lagreBedrift/'+gid;
  }
  return this.http.get(seturl).pipe(
    data => data
  );
}
slugify (text) {
  if (text) {
 const a = 'ÆØÅæøåàáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
   const b = 'aoaaoaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
 const p = new RegExp(a.split('').join('|'), 'g');
 return text.toString().toLowerCase()
   .replace(/\s+/g, '-')           // Replace spaces with -
   .replace(p, c =>
       b.charAt(a.indexOf(c)))     // Replace special chars
   .replace(/&/g, '-and-')         // Replace & with 'and'
   .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
   .replace(/\-\-+/g, '-')         // Replace multiple - with single -
   .replace(/^-+/, '')             // Trim - from start of text
   .replace(/-+$/, '');             // Trim - from end of text
}
}

/// BEDRIFTER END


/// DATOAR START

openNo(business) {
const now = new Date();
// const now = new Date('2018-09-08 22:30:00');

  // d = d.toString().replace(/-/g, '/');
  let ut = false;
  const dayNr = now.getDay();
    let tmpDateStartTime;
    let tmpDateEndTime;
    if (business['sun_open'] && business['sun_open']==='00:00:00') {
      ut = true;
    } else {
      if (dayNr === 1) {
        if (business['mon_open']) {
          tmpDateStartTime = business['mon_open'];
          tmpDateEndTime = business['mon_closed'];
        }
      }
      if (dayNr === 2) {
        if (business['tue_open']) {
          tmpDateStartTime = business['tue_open'];
          tmpDateEndTime = business['tue_closed'];
        }
      }
      if (dayNr === 3) {
        if (business['wed_open']) {
          tmpDateStartTime = business['wed_open'];
          tmpDateEndTime = business['wed_closed'];
        }
      }
      if (dayNr === 4) {
        if (business['thu_open']) {
          tmpDateStartTime = business['thu_open'];
          tmpDateEndTime = business['thu_closed'];
        }
      }
      if (dayNr === 5) {
        if (business['fri_open']) {
          tmpDateStartTime = business['fri_open'];
          tmpDateEndTime = business['fri_closed'];
        }
      }
      if (dayNr === 6) {
        if (business['sat_open']) {
          tmpDateStartTime = business['sat_open'];
          tmpDateEndTime = business['sat_closed'];
        }
      }
      if (dayNr === 0) {
        if (business['sun_open']) {
          tmpDateStartTime = business['sun_open'];
          tmpDateEndTime = business['sun_closed'];
        }
      }
      if (tmpDateStartTime) {
        const year = this.dateYear(now);
        const month = (this.dateMonth(now)+1);
        const monthut = (month < 10 ? '0' : '') + month;
        const day = now.getDate();
        const dayout = (day < 10 ? '0' : '') + day;
        const thisDate = year+'-'+monthut+'-'+dayout;
        const openDate = new Date (thisDate.replace(/-/g, '/') + ' ' + tmpDateStartTime);
        const closedDate = new Date (thisDate.replace(/-/g, '/') + ' ' + tmpDateEndTime);
        // tslint:disable-next-line:radix
        let closedDateNCcheck;
        if (tmpDateEndTime) {  closedDateNCcheck = parseInt(tmpDateEndTime.substring(0,2)); }
        if (closedDateNCcheck>=6) {
          // console.log(closedDateNCcheck,openDate,closedDate);
          if (now >= openDate && now <= closedDate) {
            ut = true;
          } else {
            ut = false;
          }
        }
    }
  }
  return ut;
}


dateMonth(d) {
  // Copy date so don't modify original
  const du = new Date(d.toString().replace(/-/g, '/'));
  return du.getMonth();
}
dateYear(d) {
  // Copy date so don't modify original
  // d.replace(/-/g, '/');
  const du = new Date(d.toString().replace(/-/g, '/'));
  return du.getFullYear();
}
dateWeek(d) {
  // console.log(d);
    // Copy date so don't modify original
    d = new Date(d.toString().replace(/-/g, '/'));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    const yearStart = +new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}
dateDay(d) {
  d = d.toString().replace(/-/g, '/');
  const du = new Date(d);
  const day = du.getDate();
  return day;
}

dagLink(d) {
  d = d.toString().replace(/-/g, '/');
  const year = this.dateYear(d);
  const month = (this.dateMonth(d)+1);
  const monthut = (month < 10 ? '0' : '') + month;
  const day = this.dateDay(d);
  const dayout = (day < 10 ? '0' : '') + day;
  return year+'-'+monthut+'-'+dayout;
}


/// DATOAR SLUTT



v() {
  return '0.6';
}

}
