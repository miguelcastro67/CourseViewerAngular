import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseAddress } from './security.values';

@Injectable()
export class AuthenticationService
{
    constructor(private http: HttpClient)
    {        
    }

    apiAccountBase = BaseAddress + 'api/Account/';
    userName = (localStorage['userName'] ? localStorage['userName'] : '');
    loggedIn = (localStorage['login'] && this.userName != '' ? true : false);

    Register(registerModel) 
    {
        return new Promise((resolve, reject) =>
        {
            this.http.post(this.apiAccountBase + 'Register', registerModel)
                .toPromise().then(result =>
                {
                    var userModel = {
                        UserName: registerModel.Email,
                        FirstName: registerModel.FirstName,
                        LastName: registerModel.LastName
                    };
                    
                    resolve(userModel);
                }).catch(result =>
                {
                    reject(result);
                });            
        });
    }

    Login(userName: string, password: string)
    {
        var payload = 'password=' + encodeURIComponent(password) 
            + '&grant_type=password&username=' + encodeURIComponent(userName);
        var options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }) };
        
        return new Promise((resolve, reject) =>
        {
            this.http.post(BaseAddress + 'Token', payload, options)
                .toPromise().then(result =>
                {
                    localStorage['login'] = JSON.stringify(result);
                    localStorage['userName'] = userName;
                    this.loggedIn = true;
                    this.userName = userName;
                    
                    resolve(userName);
                }).catch(result =>
                {
                    reject(result);
                });
        });
    }

    Logout()
     {
        localStorage.removeItem('login');
        localStorage.removeItem('userName');
        this.loggedIn = false;
        this.userName = '';
    }

    GetAccessToken()
    {
        var accessToken = '';
        var login = localStorage['login'];
        if (login)
            accessToken = JSON.parse(login).access_token;
        
        return accessToken;
    }
}