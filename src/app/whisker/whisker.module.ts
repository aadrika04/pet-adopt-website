import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhiskerPageRoutingModule } from './whisker-routing.module';

import { WhiskerPage } from './whisker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhiskerPageRoutingModule
  ],
  declarations: [WhiskerPage]
})
export class WhiskerPageModule {}
