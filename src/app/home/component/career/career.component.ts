import { Component, Input } from '@angular/core';
import { Career } from '../../model/career';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  @Input('career') career?: Career;

  constructor() { }
}