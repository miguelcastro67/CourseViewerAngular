import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-heading',
  templateUrl: './course-heading.component.html'
})
export class CourseHeadingComponent
{
    @Input() course: any;
}