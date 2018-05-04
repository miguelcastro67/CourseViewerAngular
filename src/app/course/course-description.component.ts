import { Component, AfterContentChecked } from '@angular/core';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

@Component({
    selector: 'course-description',
    templateUrl: './course-description.component.html'
})
export class CourseDescriptionComponent
{
    constructor(private courseService: CourseService)
    {
    }

    course: any = null;

    ngAfterContentChecked()
    {
        // tracking changes in these variables manually in order to ensure this code
        // gets fired after the parent component (course) and then only on a change        
        if (this.courseService.CurrentCourse != this.course)
        {
            this.course = this.courseService.CurrentCourse;
        }
    }
}