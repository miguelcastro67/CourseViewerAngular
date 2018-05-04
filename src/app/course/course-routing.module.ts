import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListComponent } from './course-list.component';
import { CourseComponent } from './course.component';
import { CourseDescriptionComponent } from './course-description.component';
import { CourseModulesComponent } from './course-modules.component';
import { CourseDiscussionComponent } from './course-discussion.component';

const routes : Routes = [
    { path: '', component: CourseListComponent, pathMatch: 'full' },
    { 
        path: ':courseId',
        component: CourseComponent,
        children: [
            { path: '', redirectTo: 'modules', pathMatch: 'full' },
            { path: 'description', component: CourseDescriptionComponent, },
            { path: 'modules', component: CourseModulesComponent },
            { path: 'discussion', component: CourseDiscussionComponent }
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
export class CourseRoutingModule { }
