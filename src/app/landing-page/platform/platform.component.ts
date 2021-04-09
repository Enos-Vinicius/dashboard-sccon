import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';
import { Helper } from 'src/shared/utils/Helper';
@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(25px)' }), 
        animate(1500, style({opacity: 1, transform: 'translateY(0px)'}))
      ]) 
    ])
  ]
})
export class PlatformComponent implements OnInit {

  lastScrollTop: 0;
  viewLaptop: boolean = false;
  viewVideo: boolean = false;
  viewSatellite: boolean = false;

  constructor(
    public authService : AuthService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', (event) => { 
      const number = window.scrollY;

      
        if(Helper.widthTablet()){
          // console.log("number: ", number);
          if(number > 6355){
            this.viewLaptop = true;
          }
          if(number > 6655){
            this.viewVideo = true;
          }
          if(number > 7015){
            this.viewSatellite = true;
          }
        } else if(!Helper.widthPhone()){
          if(number > 4630){
            this.viewLaptop = true;
          }
          if(number > 4900){
            this.viewVideo = true;
          }
          if(number > 5260){
            this.viewSatellite = true;
          }
        }

    })
  }

}
