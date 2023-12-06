import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input('course') course?: Course;

  constructor() { }

  ngOnInit(): void {
  }
}
