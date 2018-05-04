import { Component, AfterContentChecked } from '@angular/core';
import { CourseComponent } from './course.component';
import { AuthenticationService } from '../../libs/angular-web-api-security/authentication.service';
import { CourseService } from './course.service';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
    selector: 'course-discussion',
    templateUrl: './course-discussion.component.html'
})
export class CourseDiscussionComponent implements AfterContentChecked
{
    constructor(private courseService: CourseService,
                public authenticationService: AuthenticationService)
    {
    }

    private loggedIn: boolean = false;
    private course: any = null;
    courseDiscussion: any = null;
    commentEntryVisible: boolean = false;

    ngAfterContentChecked()
    {
        // tracking changes in these variables manually in order to ensure this code
        // gets fired after the parent component (course) and then only on a change        
        if (this.authenticationService.loggedIn != this.loggedIn ||
            this.courseService.CurrentCourse != this.course)
        {
            this.loggedIn = this.authenticationService.loggedIn;
            this.course = this.courseService.CurrentCourse;

            if (this.loggedIn && this.course != null)
            {
                this.courseService.GetCourseDiscussion(this.courseService.CurrentCourse.CourseId).then(courseDiscussion =>
                {
                    this.courseDiscussion = courseDiscussion;
                });
            }
        }
    }
   
    showCommentEntry()
    {
        this.commentEntryVisible = true;
    }

    commentSubmitted = (commentText: string) =>
    {
        if (this.authenticationService.loggedIn)
        {
            this.courseService.AddCourseDiscussionItem(this.authenticationService.userName, this.course.CourseId, commentText).then(discussionItem =>
            {
                this.courseDiscussion.puswh(discussionItem);
                this.commentEntryVisible = false;
            });
        }
    }

    commentCanceled = () =>
    {
        this.commentEntryVisible = false;
    }
}