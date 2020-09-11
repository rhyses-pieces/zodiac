import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZodiacHomeComponent } from './zodiac-home/zodiac-home.component'


const routes: Routes = [
  {
    path: "zodiac",
    component: ZodiacHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
