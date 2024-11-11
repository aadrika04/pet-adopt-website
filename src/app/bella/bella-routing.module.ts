import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BellaPage } from './bella.page';

const routes: Routes = [
  {
    path: '',
    component: BellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BellaPageRoutingModule {}
