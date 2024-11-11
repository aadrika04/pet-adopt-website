import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PepperPage } from './pepper.page';

const routes: Routes = [
  {
    path: '',
    component: PepperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PepperPageRoutingModule {}
