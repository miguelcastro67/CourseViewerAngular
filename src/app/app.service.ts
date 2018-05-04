import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiBase } from './app.values';
import { AuthenticationService } from '../libs/angular-web-api-security/authentication.service';

@Injectable()
export class AppService
{
    constructor(private http: HttpClient, 
                private authenticationService: AuthenticationService)
    {        
    }
    
    CurrentCourse: any;

    GetRecentlyViewedCourses(userName: string)
    {
        return new Promise((resolve, reject) =>
        {
            var accessToken = this.authenticationService.GetAccessToken();
            var options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + accessToken }) };

            if (accessToken != '') {
                this.http.get(ApiBase + 'courses/recent/' + userName + '/get', options)
                    .toPromise().then(result =>
                    {
                        resolve(result);
                    }).catch(result =>
                    {
                        reject(result);
                    });
            }
        });
    }

    ClearRecentlyViewedList(userName: string)
    {
        return new Promise((resolve, reject) =>
        {
            var accessToken = this.authenticationService.GetAccessToken();
            var options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + accessToken }) };

            if (accessToken != '') {
                this.http.get(ApiBase + 'courses/recent/' + userName + '/clear', options)
                    .toPromise().then(result =>
                    {
                        resolve(result);
                    }).catch(result =>
                    {
                        reject(result);
                    });
            }
        });
    }

    TimeFormat(hours: number, minutes: number, seconds: number)
    {
        while (seconds > 59) {
            minutes++;
            seconds -= 60;
        }
        while (minutes > 59) {
            hours++;
            minutes -= 60;
        }
            
        var timeString = '';

        if (hours > 0)
            timeString += hours.toString() + 'h ';
        timeString += minutes.toString() + 'm ';
        timeString += seconds.toString() + 's';

        return timeString;
    } 
}