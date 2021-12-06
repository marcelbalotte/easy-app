import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterSubjectsPageRoutingModule } from './register-subjects-routing.module';
import { RegisterSubjectsPage } from './register-subjects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSubjectsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterSubjectsPage]
})
export class RegisterSubjectsPageModule {}
