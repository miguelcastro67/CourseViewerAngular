import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from './course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'course',
    templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit 
{
    constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router)
    {
    }
  
    courseId: number;   
    course: any;

    @Input() author: any;
    
    private sub: any;

    ngOnInit()
    {
        this.sub = this.route.params.subscribe(params =>
        {
            this.courseId = +params['courseId'];

            this.courseService.GetCourse(this.courseId).then(course =>
            {
                this.course = course;
                this.courseService.CurrentCourse = course;
            });
        });        
    }
}