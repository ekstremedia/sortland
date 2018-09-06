import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbusiness',
  templateUrl: './addbusiness.component.html',
  styleUrls: ['./addbusiness.component.css']
})
export class AddbusinessComponent implements OnInit {

  constructor(public data: DataService) { }
  googleIdBoks: any;
  business: any;
  bsName: any;
  bsSlug: any;
  bsFound: any;
  bsNr; bsAddress; bsImg; bsPhone; bsEmail; bsHomepage; bsFax: any;
  bsOpenMon; bsOpenTue; bsOpenFri; bsOpenWed; bsOpenThu; bsOpenSat; bsOpenSun: any;
  bsCloseMon; bsCloseTue; bsCloseFri; bsCloseWed; bsCloseThu; bsCloseSat; bsCloseSun: any;
  bsLatitude; bsLongitude; bsMapUrl; bsRating; bsTypes;
  ngOnInit() {
    this.bsFound = true;
    this.googleIdBoks = 'ChIJLYBL5-dF3EURcYBaetjIg0E';
  }
  empty() {
    this.business = null;
    this.bsFound = true;
    this.bsName = null;
    this.bsSlug = null;
    this.bsNr = null;
    this.bsAddress = null;
    this.googleIdBoks = null;
    this.bsImg = null;
    this.bsEmail = null;
    this.bsHomepage = null;
    this.bsMapUrl = null;
    this.bsRating = null;
    this.bsTypes = null;
    this.bsOpenMon = null;
    this.bsCloseMon = null;
    this.bsOpenTue = null;
    this.bsCloseTue = null;
    this.bsOpenWed = null;
    this.bsCloseWed = null;
    this.bsOpenFri = null;
    this.bsCloseFri = null;
    this.bsOpenThu = null;
    this.bsCloseThu = null;
    this.bsOpenSat = null;
    this.bsCloseSat = null;
    this.bsOpenSun = null;
    this.bsCloseSun = null;
    this.bsLatitude = null;
    this.bsLongitude = null;
  }
  timeFix(str: string) {
    if (str) {
    const out = str.substr(0,2) + ':' + str.substr(2,2) + ':00';
    return out;
    }
  }
  check() {
    this.data.log(this.googleIdBoks);
      this.data.getGoogleBusiness(this.googleIdBoks).subscribe(
        data => {
          if (data && data['name']) {
            this.empty();
            this.googleIdBoks = data['place_id'];
            this.bsFound = true;
            this.business = data;
            this.bsName = data['name'];
            this.bsNr = data['formatted_phone_number'];
            this.bsAddress = data['formatted_address'];
            this.bsImg = data['icon'];
            this.bsFax = data['fax'];
            this.bsTypes = data['types'];
            this.bsEmail = data['email'];
            this.bsHomepage = data['website'];
            this.bsRating = data['rating'];
            this.bsMapUrl = data['url'];
            const slug = this.data.slugify(data['name']);
            this.bsSlug = slug;
            if (data['geometry']) { this.bsLatitude = data['geometry']['location']['lat']; }
            if (data['geometry']) { this.bsLongitude = data['geometry']['location']['lng']; }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][0] && data['opening_hours']['periods'][0]['open']) {this.bsOpenMon = this.timeFix(data['opening_hours']['periods'][0]['open']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][1] && data['opening_hours']['periods'][1]['open']) {this.bsOpenWed = this.timeFix(data['opening_hours']['periods'][1]['open']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][2] && data['opening_hours']['periods'][2]['open']) {this.bsOpenTue = this.timeFix(data['opening_hours']['periods'][2]['open']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][3] && data['opening_hours']['periods'][3]['open']) {this.bsOpenThu = this.timeFix(data['opening_hours']['periods'][3]['open']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][4] && data['opening_hours']['periods'][4]['open']) {this.bsOpenFri = this.timeFix(data['opening_hours']['periods'][4]['open']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][5] && data['opening_hours']['periods'][5]['open']) {this.bsOpenSat = this.timeFix(data['opening_hours']['periods'][5]['open']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][6] && data['opening_hours']['periods'][6]['open']) {this.bsOpenSun = this.timeFix(data['opening_hours']['periods'][6]['open']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][0] && data['opening_hours']['periods'][0]['close']) { this.bsCloseMon = this.timeFix(data['opening_hours']['periods'][0]['close']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][1] && data['opening_hours']['periods'][1]['close']) { this.bsCloseTue = this.timeFix(data['opening_hours']['periods'][1]['close']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][2] && data['opening_hours']['periods'][2]['close']) { this.bsCloseWed = this.timeFix(data['opening_hours']['periods'][2]['close']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][3] && data['opening_hours']['periods'][3]['close']) { this.bsCloseThu = this.timeFix(data['opening_hours']['periods'][3]['close']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][4] && data['opening_hours']['periods'][4]['close']) { this.bsCloseFri = this.timeFix(data['opening_hours']['periods'][4]['close']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][5] && data['opening_hours']['periods'][5]['close']) { this.bsCloseSat = this.timeFix(data['opening_hours']['periods'][5]['close']['time']); }
            if (data['opening_hours'] && data['opening_hours']['periods'] && data['opening_hours']['periods'][6] && data['opening_hours']['periods'][6]['close']) { this.bsCloseSun = this.timeFix(data['opening_hours']['periods'][6]['close']['time']); }
            this.data.log('business: ', this.business);
          } else {
            this.bsFound = false;
            this.business = null;

          }

        }
      );
    }
}
