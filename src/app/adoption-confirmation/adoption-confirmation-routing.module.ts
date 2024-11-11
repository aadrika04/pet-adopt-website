import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptionConfirmationPage } from './adoption-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptionConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptionConfirmationPageRoutingModule {}
