import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnowyPageRoutingModule } from './snowy-routing.module';

import { SnowyPage } from './snowy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnowyPageRoutingModule
  ],
  declarations: [SnowyPage]
})
export class SnowyPageModule {}
