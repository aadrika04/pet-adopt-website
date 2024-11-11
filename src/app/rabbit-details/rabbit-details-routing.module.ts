import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RabbitDetailsPage } from './rabbit-details.page';

const routes: Routes = [
  {
    path: '',
    component: RabbitDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RabbitDetailsPageRoutingModule {}
