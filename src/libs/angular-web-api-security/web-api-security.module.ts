import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { AuthenticationService } from './authentication.service';
import { UserPanelComponent } from './user-panel.component';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [
        UserPanelComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        UserPanelComponent
    ],
    providers: [
        AuthenticationService
    ]
})
export class WebApiSecurityModule { }