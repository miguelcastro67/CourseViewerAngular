import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../libs/angular-web-api-security/authentication.service';
import { UserAccountService } from './user-account.service';
import { IUser } from './user.model';

@Component({
    selector: 'user-status',
    templateUrl: './user-status.component.html'
})
export class UserStatusComponent implements OnInit
{
    constructor(private authenticationService: AuthenticationService, 
                private userAccountService: UserAccountService)
    {
    }
    
    userFullName: string = '';

    ngOnInit()
    {
        if (this.authenticationService.loggedIn) {
            this.GetUser(this.authenticationService.userName);
        }
    }

    PostRegister = (registerResponse, callback) =>
    {
        this.userAccountService.AddUser(registerResponse).then(user =>
        {
            if (callback != null)
                callback();
        });
    }

    PostLogin = (loginResponse) =>
    {
        this.GetUser(loginResponse);
    }

    GetUser(userName: string)
    {
        this.userAccountService.GetUser(userName).then(user =>
        {
            this.userFullName = user.FirstName + ' ' + user.LastName;
        });
    }
}