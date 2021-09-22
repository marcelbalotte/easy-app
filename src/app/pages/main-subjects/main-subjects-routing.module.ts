import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSubjectsPage } from './main-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: MainSubjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainSubjectsPageRoutingModule {}
