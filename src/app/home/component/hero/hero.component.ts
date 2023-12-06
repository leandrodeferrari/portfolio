import { Component } from '@angular/core';
import { Banner } from '../../model/banner';
import { BannerService } from '../../service/banner.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  banner?: Banner | null;

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.getBanner().then((r) => {
      this.banner = r || null;
    }).catch((e) => {
      this.banner = null;
    });
  }
}