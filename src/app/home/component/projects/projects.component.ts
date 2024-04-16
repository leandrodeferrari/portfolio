import { Component } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects?: Project[] | null;
  showElements: number = 3;
  totalElements: number | null = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAll().then((r) => {
      this.projects = r || null;
      this.totalElements = this.projects?.length || null;
    }).catch((e) => {
      this.projects = null;
    });
  }

  showAll() {
    this.showElements += 1;
  }
}