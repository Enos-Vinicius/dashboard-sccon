import { Component } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentyRouter;
  map;
  
  constructor(
    private translate: TranslateService,
    public router: ActivatedRoute
  ){}

  ngOnInit(){
    this.getCulture();
    
    this.map = new Map({
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([-60.3444, -14.2160]),
        zoom: 5
      })
    });
  }
  
  getCulture() {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }
}
