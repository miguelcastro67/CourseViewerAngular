import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
    selector: 'author-list',
    templateUrl: './author-list.component.html'
})
export class AuthorListComponent implements OnInit 
{
    constructor(private authorService: AuthorService)
    {
    }

    authors: any;

    ngOnInit()
    {
        this.authorService.GetAllAuthors().then(authors =>
        {
            this.authors = authors;
        });
    }
}