import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ZodiacHomeComponent } from './components/zodiac-home/zodiac-home.component';
import { FollowingComponent} from './components/following/following.component';
import { HoroscopeComponent } from './components/horoscope/horoscope.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'zodiac',
    component: ZodiacHomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'user',
    component: FollowingComponent
  },
  {
    path: 'horoscope',
    component: HoroscopeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
