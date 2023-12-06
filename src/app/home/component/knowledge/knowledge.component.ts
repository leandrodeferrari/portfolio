import { Component } from '@angular/core';
import { Technology } from '../../model/technology';
import { TechnologyService } from '../../service/technology.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {
  technologies?: Technology[] | null;

  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.technologyService.getAll().then((r) => {
      this.technologies = r || null;
    }).catch((e) => {
      this.technologies = null;
    });
  }
}
