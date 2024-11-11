import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogDetailsPage } from './dog-details.page';

const routes: Routes = [
  {
    path: '',
    component: DogDetailsPage
  },
  {
    path: 'rocky',
    loadChildren: () => import('../adoptiondetails/rocky/rocky.module').then( m => m.RockyPageModule)
  },
  {
    path: 'fluffy',
    loadChildren: () => import('../fluffy/fluffy.module').then( m => m.FluffyPageModule)
  },
  {
    path: 'bella',
    loadChildren: () => import('../bella/bella.module').then( m => m.BellaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogDetailsPageRoutingModule {}
