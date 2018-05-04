import { Component, Input } from '@angular/core';

@Component({
  selector: 'author-heading',
  templateUrl: './author-heading.component.html'
})
export class AuthorHeadingComponent
{
    @Input() author: any;
}