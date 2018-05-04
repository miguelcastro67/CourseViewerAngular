import { Component, AfterContentChecked } from '@angular/core';
import { AuthorService } from './author.service';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
  selector: 'author-courses',
  templateUrl: './author-courses.component.html'
})
export class AuthorCoursesComponent implements AfterContentChecked
{
    constructor(private authorService: AuthorService)
    {        
    }

    author: any = null;
    
    ngAfterContentChecked()
    {
        // tracking changes in these variables manually in order to ensure this code
        // gets fired after the parent component (author) and then only on a change        
        if (this.authorService.CurrentAuthor != this.author)
        {
            this.author = this.authorService.CurrentAuthor;

            if (this.author != null)
            {
                this.authorService.GetCourses(this.author.AuthorId).then(courses =>
                {
                    this.author.Courses = courses;
                });
            }
        }
    }
}