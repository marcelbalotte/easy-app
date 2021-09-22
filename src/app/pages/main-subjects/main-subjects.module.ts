import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainSubjectsPageRoutingModule } from './main-subjects-routing.module';

import { MainSubjectsPage } from './main-subjects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainSubjectsPageRoutingModule
  ],
  declarations: [MainSubjectsPage]
})
export class MainSubjectsPageModule {}
