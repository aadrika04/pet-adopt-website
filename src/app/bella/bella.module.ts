import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BellaPageRoutingModule } from './bella-routing.module';

import { BellaPage } from './bella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BellaPageRoutingModule
  ],
  declarations: [BellaPage]
})
export class BellaPageModule {}
