import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-discussion-list',
  templateUrl: './course-discussion-list.component.html'
})
export class CourseDiscussionListComponent 
{
    @Input() courseDiscussion: any;
}