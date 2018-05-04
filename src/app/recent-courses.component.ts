import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../libs/angular-web-api-security/authentication.service';
import { AppService } from './app.service';

@Component({
  selector: 'recent-courses',
  templateUrl: './recent-courses.component.html'
})
export class RecentCoursesComponent implements OnChanges
{
    constructor(private appService: AppService, public authenticationService: AuthenticationService)
    {
    }

    @Input() loggedIn: boolean = false; 

    recentlyViewed = null;

    ngOnChanges(changes: SimpleChanges)
    {
        // use onChanges so can refresh on any change to loggedIn
        if (this.authenticationService.loggedIn) {
            this.appService.GetRecentlyViewedCourses(this.authenticationService.userName).then(recentlyViewed =>
            {
                this.recentlyViewed = recentlyViewed;
            });
        }
    }

    ClearList()
    {
        this.appService.ClearRecentlyViewedList(this.authenticationService.userName);
        this.recentlyViewed = null;
    }
}