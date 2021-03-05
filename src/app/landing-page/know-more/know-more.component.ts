import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.scss']
})
export class KnowMoreComponent implements OnInit {
  items = [
    {
      "path": "../../../assets/imgs/vector/vector-tiles-yellow.svg",
      "title": "Milhões de km²",
      "text": "imageados diariamente",
      "results": "8.5"
    },
    {
      "path": "../../../assets/imgs/vector/vector-satelite-yellow.svg",
      "title": "Satélites Planet",
      "text": "cobrindo diariamente o Brasil",
      "results": "130"
    },
    {
      "path": "../../../assets/imgs/vector/vector-alerts-yellow.svg",
      "title": "MIL alertas",
      "text": "de detecção de mudança",
      "results": "90"
    },
    {
      "path": "../../../assets/imgs/vector/vector-tiles-yellow.svg",
      "title": "Milhões de km²",
      "text": "imageados diariamente",
      "results": "8.5"
    },
    {
      "path": "../../../assets/imgs/vector/vector-satelite-yellow.svg",
      "title": "Satélites Planet",
      "text": "cobrindo diariamente o Brasil",
      "results": "130"
    },
    {
      "path": "../../../assets/imgs/vector/vector-alerts-yellow.svg",
      "title": "MIL alertas",
      "text": "de detecção de mudança",
      "results": "90"
    },
  ];
  responsiveOptions;

  constructor() { 
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
  }

}
