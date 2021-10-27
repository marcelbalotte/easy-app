import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSubjectsPage } from './register-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSubjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSubjectsPageRoutingModule {}
