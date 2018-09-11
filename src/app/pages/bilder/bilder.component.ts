import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-bilder',
  templateUrl: './bilder.component.html',
  styleUrls: ['./bilder.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes

        query(':enter', [
          style({ opacity: 0 }),
          stagger(20, [
            animate('0.2s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class BilderComponent implements OnInit {
  result: any;
  setId: any;
  set: any;
  collectionSize: Promise<number>;
  pageNumber: number;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.pageNumber = this.data.pageGet();
    console.log(this.data.pageGet());
    this.doSearch();

  }

  // getSetImages(setId) {
  //   this.data.getFlickrSetPhotos(setId).subscribe(
  //     data => {
  //       this.set = data['photoset'];
  //         this.data.log('set: ', this.set);
  //       }
  //   );
  // }

  doSearch() {
    this.data.flickrSearchAll('sortland').pipe().subscribe(
      data => {
        this.set = data;
        this.collectionSize = data['photos']['pages'];
        // console.log(this.data.pageGet());
        console.log('searchResults: ', data);
      }
    );
  }
 onPager($event) {
   console.log('event: ',$event);
   if (!isNaN($event)) {
   this.data.pageSet(parseInt($event));
   this.doSearch();
   }
 }
}
