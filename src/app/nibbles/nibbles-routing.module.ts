import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NibblesPage } from './nibbles.page';

const routes: Routes = [
  {
    path: '',
    component: NibblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NibblesPageRoutingModule {}
