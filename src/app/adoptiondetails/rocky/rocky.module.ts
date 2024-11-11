import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RockyPageRoutingModule } from './rocky-routing.module';

import { RockyPage } from './rocky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RockyPageRoutingModule
  ],
  declarations: [RockyPage]
})
export class RockyPageModule {}
