import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
soketekst: any;
result: any;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  doSearch() {
    this.data.flickrSearch(this.soketekst).pipe(debounceTime(2000)).subscribe(
      data => {
        this.result = data;
        console.log('searchResults: ', data);
      }
    );
  }
}
