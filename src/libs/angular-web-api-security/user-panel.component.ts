import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'user-panel',
    templateUrl: './user-panel.component.html'
})
export class UserPanelComponent implements OnInit
{
    constructor(public authenticationService: AuthenticationService)
    {
    }

    loginMode = 'login'; // login, register

    @Input() loginAfterRegister: boolean = true;
    @Input() userLabel: string = '';
    @Input() showLogout: boolean = true;
    @Input() postRegister: any;
    @Input() postLogin: any;

    ngOnInit()
    {
        var x = 1;
    }

    Logout()
    {
        this.authenticationService.Logout();
    }
}