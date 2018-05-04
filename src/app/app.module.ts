import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { Error404Component } from './Error404.component';
import { MainNavigatorComponent } from './main-navigator.component';
import { HomeComponent } from './home.component';
import { UserStatusComponent } from './user-status.component';
import { UserAccountService } from './user-account.service';

import { WebApiSecurityModule } from '../libs/angular-web-api-security/web-api-security.module';
import { RecentCoursesComponent } from './recent-courses.component';

@NgModule({
    declarations: [
        AppComponent,
        Error404Component,
        MainNavigatorComponent,
        HomeComponent,
        UserStatusComponent,
        RecentCoursesComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        WebApiSecurityModule
    ],
    providers: [
        AppService,
        UserAccountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }