import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiBase } from '../app.values';
import { ICourse } from './course.model';
import { AuthenticationService } from '../../libs/angular-web-api-security/authentication.service';

@Injectable()
export class CourseService
{
    constructor(private http: HttpClient, 
                private authenticationService: AuthenticationService)
    {        
    }
    
    CurrentCourse: any;

    GetAllCourses() : Promise<ICourse[]>
    {
        return new Promise<ICourse[]>((resolve, reject) =>
        {
            this.http.get<ICourse[]>(ApiBase + 'courses')
                .toPromise<ICourse[]>().then(result =>
                {
                    resolve(result);
                }).catch(result =>
                {
                    reject(result);
                });
        });
    }

    GetCourse(courseId: number)
    {
        return new Promise((resolve, reject) =>
        {
            this.http.get(ApiBase + 'course/' + courseId + '/full')
                .toPromise().then(result =>
                {
                    resolve(result);
                }).catch(result =>
                {
                    reject(result);
                });
        });
    }

    GetCourseDiscussion(courseId: number)
    {
        return new Promise((resolve, reject) =>
        {
            var accessToken = this.authenticationService.GetAccessToken();
            var options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + accessToken }) };

            if (accessToken != '')
            {
                this.http.get(ApiBase + 'course/' + courseId + '/discussion', options)
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

    AddCourseDiscussionItem(userName: string, courseId: number, comment: string)
    {
        return new Promise((resolve, reject) =>
        {
            var accessToken = this.authenticationService.GetAccessToken();
            var options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + accessToken }) };

            if (accessToken != '')
            {
                var discussionItemModel = {
                    UserName: userName,
                    CourseId: courseId,
                    Comment: comment
                };
                this.http.post(ApiBase + 'course/' + courseId + '/discussion', discussionItemModel, options)
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

    UpdateRecentlyViewedCourse(userName: string, courseId: number)
    {
        return new Promise((resolve, reject) =>
        {
            var accessToken = this.authenticationService.GetAccessToken();
            var options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + accessToken }) };

            if (accessToken != '') {
                var recentModel = {
                    UserName: userName,
                    CourseId: courseId
                };
                this.http.post(ApiBase + 'courses/recent', recentModel, options)
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
}