import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MittensPageRoutingModule } from './mittens-routing.module';

import { MittensPage } from './mittens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MittensPageRoutingModule
  ],
  declarations: [MittensPage]
})
export class MittensPageModule {}
