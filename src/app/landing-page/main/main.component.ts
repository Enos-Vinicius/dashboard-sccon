import { Renderer2, ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from '../../../shared/utils/Helper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  viewText: boolean = false;
  @ViewChild('divMain', {static: true}) divMain: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', (event) => {
      let speed = 0;
      if(Helper.checkMobile()){
        speed = 10;
      } else if(Helper.checkIpad()){
        speed = 4;
      } else {
        speed = 2;
      }

      let yPos = -(window.pageYOffset / speed); 
      let bgpos = '50%'+ yPos + 'px';
      this.divMain.nativeElement.style.backgroundPosition = bgpos;
      
    })
  }
    
  redirecTo(page){
    this.router.navigate([page])
  }
  
  viewTextLegend(){
    this.viewText = !this.viewText;
  }
}
