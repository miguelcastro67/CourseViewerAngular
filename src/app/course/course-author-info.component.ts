import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CourseService } from './course.service';
import { AppService } from '../app.service';

@Component({
  selector: 'course-author-info',
  templateUrl: './course-author-info.component.html'
})
export class CourseAuthorInfoComponent implements OnChanges 
{
    constructor(private appService: AppService, private courseService: CourseService)
    {
    }

    @Input() course: any;
    @Input() author: any;
    
    courses: any;
    courseLength: any;
    courseReleased: any;

    ngOnChanges(changes: SimpleChanges)
    {
        if (this.course != null)
        {
            let hours = 0;
            let minutes = 0;
            let seconds = 0;
            this.course.Modules.forEach(element => {
                minutes += element.Minutes;
                seconds += element.Seconds;
            });
            this.courseLength = this.appService.TimeFormat(hours, minutes, seconds);
            this.courseReleased = new Date(this.course.Released).toLocaleDateString();
        }
    }
}