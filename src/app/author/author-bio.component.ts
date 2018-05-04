import { Component, AfterContentChecked } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'author-bio',
  templateUrl: './author-bio.component.html'
})
export class AuthorBioComponent implements AfterContentChecked
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
        }
    }
}