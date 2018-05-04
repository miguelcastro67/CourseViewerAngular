import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Error404Component } from './Error404.component';

const routes : Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'courses', loadChildren: 'app/course/course.module#CourseModule' },
    { path: 'course', loadChildren: 'app/course/course.module#CourseModule' },
    { path: 'authors', loadChildren: 'app/author/author.module#AuthorModule' },
    { path: 'author', loadChildren: 'app/author/author.module#AuthorModule' },
    { path: '*', component: Error404Component }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
