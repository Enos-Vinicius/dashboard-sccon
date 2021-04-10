import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';

@Component({
  selector: 'app-info-news',
  templateUrl: './info-news.component.html',
  styleUrls: ['./info-news.component.scss']
})
export class InfoNewsComponent implements OnInit {

  arrNews = []

  widthScreen: number;

  constructor(
    private newsService: NewsService

  ) { }

  ngOnInit(): void {
    this.widthScreen = window?.screen?.width;

    this.getNews();
  }

  getNews(){
    this.newsService.getAll().subscribe(
      res => {
        // this.arrNews = res;
        res.forEach(
          item => {
            if(res.indexOf(item)%2 === 0 ){
              this.arrNews.push({
                ...item,
                order: 2,
                order_img: 1
              })
            } else {
              this.arrNews.push({
                ...item,
                order: 1,
                order_img: 2
              })
            }
          }
        )
      },
      err => {
        console.log("err: ", err);
      }
    )
  }
}
