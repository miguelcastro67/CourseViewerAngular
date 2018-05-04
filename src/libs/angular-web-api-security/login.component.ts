import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit 
{
    constructor(public authenticationService: AuthenticationService)
    {
    }

    @Input() showRememberMe: boolean;
    @Input() postLogin: any;

    ngOnInit()
    {
        if (!this.showRememberMe)
            this.showRememberMe = false;
    }

    credentials = {
        userName: '',
        password: '',
        rememberMe: false
    };

    Login()
    {
        this.authenticationService.Login(this.credentials.userName, this.credentials.password).then(loginResponse =>
        {
            this.postLogin(loginResponse);
        });
    }
}