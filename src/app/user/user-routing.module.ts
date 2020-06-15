import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/i18n';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationGuard } from './../auth/authentication.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: extract('Home') },
    canActivate: [AuthenticationGuard],
  },
  { path: 'forgotpass', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UserRoutingModule {}
