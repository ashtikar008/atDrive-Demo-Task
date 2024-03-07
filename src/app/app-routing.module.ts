import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: '/Dashbord' },
  {
    path: 'Dashbord',
    component: DashbordComponent
  },
  {
    path: 'User',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
