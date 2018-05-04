import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WebApiSecurityModule } from '../../libs/angular-web-api-security/web-api-security.module';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorService } from './author.service';
import { AuthorListComponent } from './author-list.component';
import { AuthorComponent } from './author.component';
import { AuthorNavigatorComponent } from './author-navigator.component';
import { AuthorHeadingComponent } from './author-heading.component';
import { AuthorBioComponent } from './author-bio.component';
import { AuthorCoursesComponent } from './author-courses.component';

@NgModule({
    declarations: [
        AuthorListComponent,
        AuthorComponent,
        AuthorNavigatorComponent,
        AuthorHeadingComponent,
        AuthorBioComponent,
        AuthorCoursesComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        WebApiSecurityModule,
        AuthorRoutingModule
    ],
    providers: [
        AuthorService
    ]
})
export class AuthorModule { }
