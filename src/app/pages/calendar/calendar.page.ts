import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.route.navigate(['/home']);
  }
}
