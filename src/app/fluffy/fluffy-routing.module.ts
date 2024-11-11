import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FluffyPage } from './fluffy.page';

const routes: Routes = [
  {
    path: '',
    component: FluffyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FluffyPageRoutingModule {}
