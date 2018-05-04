import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiBase } from '../app.values';

@Injectable()
export class AuthorService
{
    constructor(private http: HttpClient)
    {
    }

    CurrentAuthor: any;
    
    GetAllAuthors()
    {
        return new Promise((resolve, reject) =>
        {
            this.http.get(ApiBase + 'authors')
                .toPromise().then(result =>
                {
                    resolve(result);
                }).catch(result =>
                {
                    reject(result);
                });
        });
    }

    GetAuthor(authorId: number)
    {
        return new Promise((resolve, reject) =>
        {
            this.http.get(ApiBase + 'author/' + authorId)
                .toPromise().then(result =>
                {
                    resolve(result);
                }).catch(result =>
                {
                    reject(result);
                });
        });
    }

    GetCourses(authorId: number)
    {
        return new Promise((resolve, reject) =>
        {
            this.http.get(ApiBase + 'author/' + authorId + '/courses')
                .toPromise().then(result =>
                {
                    resolve(result);
                }).catch(result =>
                {
                    reject(result);
                });
        });
    }
}