import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { ContactComponent } from './contact.component';

const routes: Routes = [{ path: '', component: ContactComponent, data: { title: extract('About') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ContactRoutingModule {}
