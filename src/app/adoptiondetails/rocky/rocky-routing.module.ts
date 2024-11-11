import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RockyPage } from './rocky.page';

const routes: Routes = [
  {
    path: '',
    component: RockyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockyPageRoutingModule {}
