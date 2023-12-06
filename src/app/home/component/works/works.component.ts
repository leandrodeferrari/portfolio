import { Component } from '@angular/core';
import { Work } from '../../model/work';
import { WorkService } from '../../service/work.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  works?: Work[] | null;

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getAll().then((r) => {
      this.works = r || null;
    }).catch((e) => {
      this.works = null;
    });
  }
}