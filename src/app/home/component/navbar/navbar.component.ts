import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAuth: boolean;

  constructor(private router: Router) {
    let auth = localStorage.getItem('auth');

    if(auth){
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
   }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > 500) {
      element.classList.add('bg-dark');
    } else {
      element.classList.remove('bg-dark');
    }
  }
}