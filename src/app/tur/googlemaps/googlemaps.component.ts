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
  kmlLayer: any;
  myPosition: any;
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



  // this.setMarker();


  if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
        position => {
          this.myPosition = { lat: position.coords.latitude, lng: position.coords.longitude };
            // this.myPosition = position,
                console.log(position);
        },
        error => {
            switch (error.code) {
                case 1:
                    console.log('Permission Denied');
                    break;
                case 2:
                    console.log('Position Unavailable');
                    break;
                case 3:
                    console.log('Timeout');
                    break;
            }
        }
    );
};

  }
  setMarker() {


    // Try HTML5 geolocation.
        console.log('Sat marker');
        if (this.map) {
        const m = new google.maps.Marker({
          position: this.myPosition,
          map: this.map,
          title: 'Din posisjon'});
        }

  }
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }
  tilt(): void {
    this.map.setTilt(45);
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
  clear() {
    if (this.kmlLayer) {
      this.kmlLayer.setMap(null);
    }
  }
  setHagahaugen() {
    this.clear();
    this.kmlLayer = new google.maps.KmlLayer({
      url: 'http://nesthus.no/hagahaugenmolster.kml',
      map: this.map
    });

  }
  setKiseldur() {
    this.clear();
    this.kmlLayer = new google.maps.KmlLayer({
      url: 'http://nesthus.no/kiseldur.kml',
      map: this.map
    });

  }

  setOrrefloten() {
    this.clear();

    this.kmlLayer = new google.maps.KmlLayer({
      url: 'http://nesthus.no/molsterorrefloten.kml',
      map: this.map
    });

  }

  setMolster() {
    this.clear();

    this.kmlLayer = new google.maps.KmlLayer({
      url: 'http://nesthus.no/molsterskitset.kml',
      map: this.map
    });

  }
}
