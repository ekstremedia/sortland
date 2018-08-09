import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {ActivatedRoute} from '@angular/router';
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
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css'],
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
export class SetComponent implements OnInit {
  setId: any;
  set: any;
  constructor(private data: DataService, private route: ActivatedRoute) { this.route.params.subscribe( params => this.setId = params ); }

  ngOnInit() {
    this.getSetImages(this.setId);
  }

  getSetImages(setId) {
    this.data.getFlickrSetPhotos(setId.id).subscribe(
      data => {
        this.set = data['photoset'];
          console.log('set: ', this.set);
        }
    );
  }

}
