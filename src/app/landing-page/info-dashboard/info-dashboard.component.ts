import { AuthService } from './../../../shared/services/auth.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Helper } from 'src/shared/utils/Helper';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.scss']
})
export class InfoDashboardComponent implements OnInit {

  @ViewChild('divMackbook', {static: true}) divMackbook: ElementRef;
  @ViewChild('divIphone', {static: true}) divIphone: ElementRef;
  lastScrollTop = 0;

  constructor(
    public authService : AuthService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {  
    this.renderer.listen('window', 'scroll', (event) => { 
      if(window.scrollY > this.lastScrollTop){
        this.lastScrollTop = window.scrollY;
        const number = window.scrollY;
    
        if(Helper.widthTablet()){
          if(number > 4000 && number < 5200){
            this.divMackbook.nativeElement.style.marginRight = (5500 - (number + 300)) + 'px';
          } 
        } else if(!Helper.widthPhone()){
            if(number > 2000 && number < 4052){
              this.divMackbook.nativeElement.style.marginLeft = -(4100 - number) + 'px';      
            }    
            if(number > 3800 && number < 4000){
              this.divIphone.nativeElement.style.marginLeft = (4000 - number) + 'px';
            }
        }
      }


    })
  }

}
