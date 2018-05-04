import { Component, Input } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent
{
    constructor(public authenticationService: AuthenticationService)
    {
    }

    @Input() loginAfterRegister: boolean = true;
    @Input() postRegister: any;
    @Input() postLogin: any;

    regInfo =
    {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    Register = function () 
    {
        var registerModel = {
            FirstName: this.regInfo.firstName,
            LastName: this.regInfo.lastName,
            Email: this.regInfo.email,
            Password: this.regInfo.password,
            ConfirmPassword: this.regInfo.password
        };

        this.authenticationService.register(registerModel).then(registerResponse =>
        {
            if (this.postRegister)
                this.postRegister(registerResponse,() =>
                {
                    this.loginAfter();
                });
            else
                this.loginAfter();
        });
    }

    LoginAfter = function ()
    {
        if (this.loginAfterRegister) {
            this.authenticationService.login(this.regInfo.email, this.regInfo.password).then(loginResponse =>
            {
                if (this.postLogin)
                    this.postLogin(loginResponse);
            });
        }
    }
}