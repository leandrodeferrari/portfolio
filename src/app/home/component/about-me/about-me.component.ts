import { Component } from '@angular/core';
import { AboutMeService } from '../../service/about-me.service';
import { About } from '../../model/about';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  about?: About | null;

  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
    this.aboutMeService.getAbout().then((r) => {
      this.about = r || null;
    }).catch((e) => {
      this.about = null;
    });
  }
}
