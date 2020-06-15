import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { HomeComponent } from './home/home.component';

import { AuthenticationGuard } from './auth';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, data: { title: extract('Home') } },

  {
    path: 'forgotpass',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthenticationGuard],
  },

  { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
