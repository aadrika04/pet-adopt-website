import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'cat-details',
    loadChildren: () => import('../cat-details/cat-details.module').then( m => m.CatDetailsPageModule)
  },
  {
    path: 'dog-details',
    loadChildren: () => import('../dog-details/dog-details.module').then( m => m.DogDetailsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
