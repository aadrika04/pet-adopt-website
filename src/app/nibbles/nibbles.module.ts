import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NibblesPageRoutingModule } from './nibbles-routing.module';

import { NibblesPage } from './nibbles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NibblesPageRoutingModule
  ],
  declarations: [NibblesPage]
})
export class NibblesPageModule {}
