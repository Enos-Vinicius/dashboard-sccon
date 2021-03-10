import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-mosaics',
  templateUrl: './images-mosaics.component.html',
  styleUrls: ['./images-mosaics.component.scss']
})
export class ImagesMosaicsComponent implements OnInit {

  events: any[];
  eventsMobile: any[];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      {status: 'NOV', date: '15/10/2020 10:30'},
      {status: 'NOV', date: '15/10/2020 14:00'},
      {status: 'NOV', date: '15/10/2020 16:15'},
      {status: 'NOV', date: '15/10/2020 16:15'},
      {status: 'NOV', date: '15/10/2020 16:15'},
      {status: 'NOV', date: '15/10/2020 16:15'},
      {status: 'NOV', date: '16/10/2020 10:00'}
    ];

    this.eventsMobile = [
      {status: 'NOV', date: '15/10/2020 10:30'},
      {status: 'NOV', date: '15/10/2020 14:00'},
      {status: 'NOV', date: '15/10/2020 16:15'}
    ];
  }



}
