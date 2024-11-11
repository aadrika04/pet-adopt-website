import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PepperPageRoutingModule } from './pepper-routing.module';

import { PepperPage } from './pepper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PepperPageRoutingModule
  ],
  declarations: [PepperPage]
})
export class PepperPageModule {}
