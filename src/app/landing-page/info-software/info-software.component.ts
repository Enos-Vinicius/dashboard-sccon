import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-info-software',
  templateUrl: './info-software.component.html',
  styleUrls: ['./info-software.component.scss']
  
})
export class InfoSoftwareComponent implements OnInit {

  inputText;
  inputTextDisabled;
  viewText: boolean = false;
  matcher = new MyErrorStateMatcher();
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
  events: any[];

  constructor(
    
  ) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '375px',
          numVisible: 1,
          numScroll: 1
      }]
  }

  ngOnInit(): void {
    
    this.inputText = new FormControl('', [
      Validators.required
    ]);
    
    this.inputTextDisabled = new FormControl({value: '', disabled: true}, [
      Validators.required
    ]);

    this.events = [
      {status: 'NOV', date: '15/10/2020 10:30'},
      {status: 'NOV', date: '15/10/2020 14:00'},
      {status: 'NOV', date: '15/10/2020 16:15'},
      {status: 'NOV', date: '15/10/2020 16:15'},
      {status: 'NOV', date: '15/10/2020 16:15'},
      {status: 'NOV', date: '15/10/2020 16:15'}
    ];
  }

  viewTextLegend(){
    this.viewText = !this.viewText;
  }

}
