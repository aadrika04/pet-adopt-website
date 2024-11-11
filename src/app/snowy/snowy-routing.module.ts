import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnowyPage } from './snowy.page';

const routes: Routes = [
  {
    path: '',
    component: SnowyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnowyPageRoutingModule {}
