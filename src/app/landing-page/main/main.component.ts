import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
    
  redirecTo(page){
    this.router.navigate([page])
  }
}
