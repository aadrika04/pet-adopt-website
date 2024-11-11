import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FluffyPageRoutingModule } from './fluffy-routing.module';

import { FluffyPage } from './fluffy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FluffyPageRoutingModule
  ],
  declarations: [FluffyPage]
})
export class FluffyPageModule {}
