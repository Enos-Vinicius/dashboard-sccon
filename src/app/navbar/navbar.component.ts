import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
    private renderer : Renderer2, 
    private element : ElementRef, 
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

  redirecTo(page){
    this.router.navigate([page])
  }
}
