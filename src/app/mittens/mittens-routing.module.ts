import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MittensPage } from './mittens.page';

const routes: Routes = [
  {
    path: '',
    component: MittensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MittensPageRoutingModule {}
