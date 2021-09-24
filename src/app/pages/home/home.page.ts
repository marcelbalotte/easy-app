import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}

  navigateToMainSubjects() {
    this.route.navigate(['/main-subjects']);
  }

  navigateToCalendar() {
    this.route.navigate(['/calendar']);
  }

  // TODO: remove function, added just to implement all the navigations.
  navigateToLogin() {
    this.route.navigate(['/login']);
  }
}
