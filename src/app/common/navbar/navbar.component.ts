import { AuthService } from '../../../shared/services/auth.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarMin: boolean = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private element: ElementRef,
    public dialog: MatDialog,
    public authService: AuthService
  ) { }

  ngOnInit(): void {

    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        this.navbarMin = true;
      } else {
        this.navbarMin = false;
      }
    });
  }

  redirecTo(page) {
    if (page == 'imagens') {
      window.location.href = 'https://plataforma-pf.sccon.com.br/imagens/#/mapa';
    } else if (page == 'dashboard') {
      window.location.href = 'https://plataforma-pf.sccon.com.br/#/dashboard';
    } else if (page == 'ead') {
      window.location.href = 'https://ead.sccon.com.br/ead/';
    } else {
      this.router.navigate([page])
    }

  }

  doLogin() {
    this.authService.openModalLogin();
  }

  doLogout() {
    this.authService.logout();
  }
}
