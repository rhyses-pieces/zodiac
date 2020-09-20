import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HoroscopeComponent } from './components/horoscope/horoscope.component';
import { ZodiacHomeComponent } from './components/zodiac-home/zodiac-home.component';
import { FollowingComponent } from './components/following/following.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { YourZodiacComponent } from './components/your-zodiac/your-zodiac.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NestedZodiacComponent } from './components/nested-zodiac/nested-zodiac.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    ZodiacHomeComponent,
    HoroscopeComponent,
    FollowingComponent,
    MoreInfoComponent,
    YourZodiacComponent,
    LogoutComponent,
    NestedZodiacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
