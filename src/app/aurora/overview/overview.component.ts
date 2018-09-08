import { DataService } from './../../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {

  constructor(public data: DataService) { }
  noaaKindex;noaaKindexMinute;noaaKindexForecast;kpIndexNow: any;
  gnkIndex;gnkForekast;gnkMinute: Subscription;
  upBtn: Boolean;
  now: Date;
  forecast: any;
  ngOnInit() {
    this.updateKindex();
    this.now = new Date();
  }
  updateKindex() {
    this.getNoaaMinuteKindex();
    this.getNoaaKindex();
    this.getNoaaForecast();
    }

  getNoaaMinuteKindex() {
   this.gnkMinute = this.data.noaaKindexByMinute().subscribe(data => {
      this.noaaKindexMinute = data;
      // tslint:disable-next-line:radix
      // const len = this.noaaKindex.length;
      // this.noaaKindexNr = parseInt(this.noaaKindex[len-1][2]);
      // this.noaaKindexNrAcurate = parseInt(this.noaaKindex[len-1][1]);
      // this.noaaKindexDate = parseInt(this.noaaKindex[len-1][0]);
      // // this.data.log('aurora noaa: ', data);
      // this.data.log('updateing');
    });
  }
  getNoaaKindex() {
   this.gnkIndex = this.data.noaaKindex().subscribe(data => {
      this.noaaKindex = data;
      // tslint:disable-next-line:radix
      // const len = this.noaaKindex.length;
      // this.noaaKindexNr = parseInt(this.noaaKindex[len-1][2]);
      // this.noaaKindexNrAcurate = parseInt(this.noaaKindex[len-1][1]);
      // this.noaaKindexDate = parseInt(this.noaaKindex[len-1][0]);
      this.kpIndexNow = data[1][1];
      // this.data.log('kIndex: ', data);
      // this.data.log('updateing');
    });
  }
  getNoaaForecast() {
   this.gnkForekast = this.data.noaaKindexForecast().subscribe(data => {
      this.noaaKindexForecast = data;
      // tslint:disable-next-line:radix
      // const len = this.noaaKindex.length;
      // this.noaaKindexNr = parseInt(this.noaaKindex[len-1][2]);
      // this.noaaKindexNrAcurate = parseInt(this.noaaKindex[len-1][1]);
      // this.noaaKindexDate = parseInt(this.noaaKindex[len-1][0]);
      // this.data.log('kIndex foreast: ', data);
      // this.data.log('updateing');
     this.forecast = this.foreCastSort(data);
    });
  }

  foreCastSort(data) {
    const now = this.now;

    let i = 0;
    let gammeltid = '';
    let dato;
    let datout;

    const array: any[] = [];
    let tmpArray: any[] = [];
    let tmpDate;
    for(const tid of data) {
      i++;
      if (i > 1) {
          tmpDate = new Date(tid[0]);
          if (tmpDate > now) {
            if (tid[0].substring(0,10) === gammeltid) {
              tmpArray['dato'] = tid[0].substring(0,10);

              tmpArray.push(tid);
            }
          if (tid[0].substring(0,10) !== gammeltid) {
            if (tmpArray.length>0) {
              array.push(tmpArray);
            }
              tmpArray = [];
              dato = tid[0].substring(0,10);
              datout = dato.substring(0,10);
              if (tid) { tmpArray.push(tid); }
              // console.log(datout);
          }
        }
      }
      gammeltid = datout;
      // console.log('gammeltid',gammeltid,'tid',datout)
    }
    console.log(array);
    return array;
  }
 kl(tid) {
   const ut = tid.substring(11,16);
   return ut;
 }
 findato(tid) {
   const tmpDate = new Date(tid);
   const monthNames = [
    'januar', 'februar', 'mars',
    'april', 'mai', 'juni', 'juli',
    'august', 'september', 'oktober',
    'november', 'desember'
  ];
  const monthIndex = tmpDate.getMonth();

   const outDate = tmpDate.getDate() + '. ' + monthNames[monthIndex];
  return outDate;
 }
  ngOnDestroy() {
    if (this.gnkIndex) {
    this.gnkIndex.unsubscribe();
    }
    if (this.gnkForekast) {
    this.gnkForekast.unsubscribe();
    }
    if (this.gnkMinute) {
    this.gnkMinute.unsubscribe();
    }
  }
  pi(str) {
    // tslint:disable-next-line:radix
    return parseInt(str);
  }
}
