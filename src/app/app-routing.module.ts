import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'main-subjects',
    loadChildren: () => import('./pages/main-subjects/main-subjects.module').then( m => m.MainSubjectsPageModule)
  },
  {
    path: 'subject',
    loadChildren: () => import('./pages/subject/subject.module').then( m => m.SubjectPageModule)
  },  {
    path: 'register-subjects',
    loadChildren: () => import('./pages/register-subjects/register-subjects.module').then( m => m.RegisterSubjectsPageModule)
  },
  {
    path: 'register-task',
    loadChildren: () => import('./pages/register-task/register-task.module').then( m => m.RegisterTaskPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
