import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
  selector: 'course-discussion-item',
  templateUrl: './course-discussion-item.component.html'
})
export class CourseDiscussionItemComponent 
{
    @Input() commentSubmitted: any = null;
    @Input() commentCanceled: any = null;

    commentText: string = "";

    submit()
    {
        if (this.commentText != '')
        {
            if (this.commentSubmitted != null)
            {
                this.commentSubmitted(this.commentText);
                this.commentText = '';
            }
        }
    }

    cancel()
    {
        if (this.commentCanceled != null)
        {
            this.commentCanceled();
            this.commentText= '';
        }
    }
}