import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorListComponent } from './author-list.component';
import { AuthorComponent } from './author.component';
import { AuthorBioComponent } from './author-bio.component';
import { AuthorCoursesComponent } from './author-courses.component';

const routes : Routes = [
    { path: '', component: AuthorListComponent, pathMatch: 'full' },
    { 
        path: ':authorId',
        component: AuthorComponent,
        children: [
            { path: '', redirectTo: 'courses', pathMatch: 'full' },
            { path: 'courses', component: AuthorCoursesComponent },
            { path: 'bio', component: AuthorBioComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AuthorRoutingModule { }
