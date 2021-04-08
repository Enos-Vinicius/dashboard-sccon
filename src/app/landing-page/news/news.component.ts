import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news = [];
  responsiveOptions;
  viewForm: boolean = false;

  constructor(
    private newsService: NewsService
  ) {
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
    this.getNews();
  }

  getNews(){
    this.newsService.getAll().subscribe(
      res => {
        this.news = res;
      },
      err => {
        console.log("err: ", err);
      }
    )
  }

}
