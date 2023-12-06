import { Component } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses?: Course[] | null;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().then((r) => {
      this.courses = r || null;
    }).catch((e) => {
      this.courses = null;
    });
  }
}
