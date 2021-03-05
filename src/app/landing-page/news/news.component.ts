import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  products = [{
    "id": "1000",
    "code": "f230fh0g3",
    "name": "17",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": 'Milhões',
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
  },{
    "id": "1000",
    "code": "f230fh0g3",
    "name": "200",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": "mil",
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
  },
  {
    "id": "1000",
    "code": "f230fh0g3",
    "name": "98",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": "%",
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
  },
  {
    "id": "1000",
    "code": "f230fh0g3",
    "name": "98",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": "%",
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
  },
  {
    "id": "1000",
    "code": "f230fh0g3",
    "name": "98",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": "%",
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
  },
  ];
  responsiveOptions;
  
  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '2048px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 3
      },
      {
          breakpoint: '375px',
          numVisible: 1,
          numScroll: 3
      }
    ];
   }

  ngOnInit(): void {
  }

}
