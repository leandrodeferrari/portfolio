import { Component } from '@angular/core';
import { Career } from '../../model/career';
import { CareerService } from '../../service/career.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  careers?: Career[] | null;

  constructor(private careerService: CareerService) { }

  ngOnInit(): void {
    this.careerService.getAll().then((r) => {
      this.careers = r || null;
    }).catch((e) => {
      this.careers = null;
    });
  }
}
