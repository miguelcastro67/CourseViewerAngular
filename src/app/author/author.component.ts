import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from './author.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'author',
    templateUrl: './author.component.html'
})
export class AuthorComponent implements OnInit 
{
    constructor(private authorService: AuthorService, private route: ActivatedRoute, private router: Router)
    {
    }
  
    authorId: number;   
    author: any;
   
    private sub: any;

    ngOnInit()
    {
        this.sub = this.route.params.subscribe(params =>
        {
            this.authorId = +params['authorId'];

            this.authorService.GetAuthor(this.authorId).then(author =>
            {
                this.author = author;
                this.authorService.CurrentAuthor = author;
            });
        });        
    }
}