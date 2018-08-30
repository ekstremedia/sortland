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
  noaaKindex;noaaKindexMinute;noaaKindexForecast: any;
  gnkIndex;gnkForekast;gnkMinute: Subscription;
  upBtn: Boolean;
  ngOnInit() {
    this.updateKindex();

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
      this.data.log('updateing');
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
      this.data.log('kIndex: ', data);
      this.data.log('updateing');
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
      this.data.log('kIndex foreast: ', data);
      this.data.log('updateing');
    });
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
