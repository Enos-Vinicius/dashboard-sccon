import { LoginComponent } from './../../shared/components/login/login.component';
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
    public dialog: MatDialog
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
    this.router.navigate([page])
  }

  goLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {action : 'login'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
