import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { ICourse } from './course.model';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit 
{
    constructor(private courseService: CourseService)
    {
    }
    
    courses: ICourse[];
    
    ngOnInit()
    {
        this.courseService.GetAllCourses().then(courses =>
        {
            this.courses = courses;
        });
    }
}