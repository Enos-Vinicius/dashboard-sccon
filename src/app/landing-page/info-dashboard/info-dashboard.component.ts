import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrls: ['./info-dashboard.component.scss']
})
export class InfoDashboardComponent implements OnInit {

  constructor(
    public authService : AuthService
  ) { }

  ngOnInit(): void {
  }

}
