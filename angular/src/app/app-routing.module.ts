import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ZodiacHomeComponent } from './zodiac-home/zodiac-home.component';
import { FollowingComponent} from './following/following.component';
import { MoreInfoComponent } from './more-info/more-info.component'
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
    component: ZodiacHomeComponent,
    children: [{
      path: ':name',
      component: MoreInfoComponent
    }]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'user',
    component: FollowingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
