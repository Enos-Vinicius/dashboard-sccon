import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Helper } from '../../../shared/utils/Helper';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.scss']
})
export class KnowMoreComponent implements OnInit {
  @ViewChild('divKnow', {static: true}) divKnow: ElementRef;
  
  items = [
    {
      "path": "assets/imgs/vector/vector-tiles-yellow.svg",
      "title": "Milhões de km²",
      "text": "imageados diariamente",
      "results": "8.5"
    },
    {
      "path": "assets/imgs/vector/vector-satelite-yellow.svg",
      "title": "Satélites Planet",
      "text": "cobrindo diariamente o Brasil",
      "results": "130"
    },
    {
      "path": "assets/imgs/vector/vector-alerts-yellow.svg",
      "title": "MIL alertas",
      "text": "de detecção de mudança",
      "results": "90"
    },
    {
      "path": "assets/imgs/vector/vector-tiles-yellow.svg",
      "title": "Milhões de km²",
      "text": "imageados diariamente",
      "results": "8.5"
    },
    {
      "path": "assets/imgs/vector/vector-satelite-yellow.svg",
      "title": "Satélites Planet",
      "text": "cobrindo diariamente o Brasil",
      "results": "130"
    },
    {
      "path": "assets/imgs/vector/vector-alerts-yellow.svg",
      "title": "MIL alertas",
      "text": "de detecção de mudança",
      "results": "90"
    },
  ];
  responsiveOptions;

  constructor(
    private eleRef: ElementRef,
    private renderer: Renderer2,
  ) { 
    this.responsiveOptions = [
      {
          breakpoint: '2048px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '375px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', (event) => {
      
      let speed = 0;
      let heighDiv = 0;
      if(Helper.checkMobile()){
        speed = 10;
        heighDiv = 200;
      } else if(Helper.checkIpad()){
        speed = 4;
        heighDiv = 300;
      } else {
        speed = 2;
        heighDiv = 700;
      }

      let yPos = -((window.pageYOffset / speed) -heighDiv); 
      let bgpos = '50%'+ yPos + 'px';
      this.divKnow.nativeElement.style.backgroundPosition = bgpos;

    })
  }

}
