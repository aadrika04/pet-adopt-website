import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RabbitDetailsPageRoutingModule } from './rabbit-details-routing.module';

import { RabbitDetailsPage } from './rabbit-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RabbitDetailsPageRoutingModule
  ],
  declarations: [RabbitDetailsPage]
})
export class RabbitDetailsPageModule {}
