import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiBase } from './app.values';
import { IUser } from './user.model';

@Injectable()
export class UserAccountService
{
    constructor(private http: HttpClient)
    {
    }

    GetUser(userName: string) : Promise<IUser>
    {
        return new Promise((resolve, reject) =>
        {
            this.http.get<IUser>(ApiBase + 'user/' + encodeURIComponent(userName) + '/get')
                .toPromise<IUser>().then(result =>
                {
                    resolve(result);
                }).catch(result =>
                {
                    reject(result);
                });
        });
    }
    
    AddUser(userModel: IUser)
    {
        return new Promise((resolve, reject) =>
        {
            this.http.post<IUser>(ApiBase + 'user/add', userModel)
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