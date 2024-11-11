import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhiskerPage } from './whisker.page';

const routes: Routes = [
  {
    path: '',
    component: WhiskerPage
  },
  {
    path: 'whisker',
    loadChildren: () => import('../whisker/whisker.module').then( m => m.WhiskerPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhiskerPageRoutingModule {}
