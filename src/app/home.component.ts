import { Component } from '@angular/core';
import { AuthenticationService } from '../libs/angular-web-api-security/authentication.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent 
{
    constructor(public authenticationService: AuthenticationService)
    {
    }
}