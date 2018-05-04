import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WebApiSecurityModule } from '../../libs/angular-web-api-security/web-api-security.module';
import { CourseRoutingModule } from "./course-routing.module";
import { CourseListComponent } from './course-list.component';
import { CourseComponent } from './course.component';
import { CourseHeadingComponent } from './course-heading.component';
import { CourseDescriptionComponent } from './course-description.component';
import { CourseModulesComponent } from './course-modules.component';
import { CourseDiscussionComponent } from './course-discussion.component';
import { CourseDiscussionListComponent } from './course-discussion-list.component';
import { CourseDiscussionItemComponent } from './course-discussion-item.component';
import { CourseAuthorInfoComponent } from './course-author-info.component';
import { CourseNavigatorComponent } from './course-navigator.component';
import { CourseService } from './course.service';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseComponent,
        CourseHeadingComponent,
        CourseDescriptionComponent,
        CourseModulesComponent,
        CourseDiscussionComponent,
        CourseDiscussionListComponent,
        CourseDiscussionItemComponent,
        CourseAuthorInfoComponent,
        CourseNavigatorComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        CourseRoutingModule,
        WebApiSecurityModule
    ],
    providers: [
        CourseService
    ]
})
export class CourseModule { }
