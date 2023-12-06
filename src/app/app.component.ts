import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  load?: Boolean;

  constructor(){
    if(sessionStorage.getItem("banner")){
      this.load = false;
    } else {
      this.load = true;
      setTimeout(() => {
        this.load = false;
      }, 5000);
    }
  }

  goToTop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}