import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  latitude: number;
  latlon: any;
  longitude: number;
  kmlfil = 'assets/molsterskitset.kml';
  constructor() { }

  ngOnInit() {
    this.longitude = 6.3996434;
    this.latitude = 60.6333677;
    this.latlon = { lat: this.latitude, lng: this.longitude };
    const mapProp = {
      center: this.latlon,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      strokeColor: '#CCC',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    // this.tmplatitude = this.map.location.lat;
    this.setMolster();
  }
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }
  setCenter(e: any) {
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }
  setVoss() {
    this.longitude = 6.4021325;
    this.latitude = 60.6257904;
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }

  setMolster() {
    // const kmlLayer = new google.maps.KmlLayer(this.kmlfil, {
    //   suppressInfoWindows: true,
    //   preserveViewport: false,
    //   map: this.map
    // });
    // kmlLayer.addListener('click', function(event) {
    //   var content = event.featureData.infoWindowHtml;
    //   var testimonial = document.getElementById('capture');
    //   testimonial.innerHTML = content;
    // });
    console.log(this.kmlfil);
    const georssLayer = new google.maps.KmlLayer({
      url: 'http://nesthus.no/molsterskitset.kml',
      map: this.map
    });
    
  }
}
