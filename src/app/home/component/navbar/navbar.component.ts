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

    if (auth) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > 500) {
      element.classList.add('bg-dark');
    } else {
      element.classList.remove('bg-dark');
    }
  }

  cerrarMenu(): void {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 991) {      
      const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon') as HTMLElement | null;

      if (navbarTogglerIcon) {
        navbarTogglerIcon.click();
      }
    }
  }
}