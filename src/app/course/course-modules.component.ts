import { Component, AfterContentChecked } from '@angular/core';
import { CourseService } from './course.service';
import { CourseComponent } from './course.component';
import { AppService } from '../app.service';

@Component({
    selector: 'course-modules',
    templateUrl: './course-modules.component.html'
})
export class CourseModulesComponent implements AfterContentChecked 
{
    constructor(private appService: AppService, public courseService: CourseService)
    {
    }

    course : any;

    ngAfterContentChecked()
    {
        // tracking changes in these variables manually in order to ensure this code
        // gets fired after the parent component (course) and then only on a change        
        if (this.courseService.CurrentCourse != this.course)
        {
            this.course = this.courseService.CurrentCourse;
        }
    }

    timeFormat(module)
    {
        var hours = 0;
        var minutes = Number(module.Minutes);
        var seconds = Number(module.Seconds);

        var moduleLength = this.appService.TimeFormat(hours, minutes, seconds);

        return moduleLength;
    }
}