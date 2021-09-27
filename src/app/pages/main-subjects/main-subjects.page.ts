import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-subjects',
  templateUrl: './main-subjects.page.html',
  styleUrls: ['./main-subjects.page.scss'],
})
export class MainSubjectsPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  navigateToHome() {
    this.route.navigate(['/home']);
  }

  navigateToSelectedSubject() {
    this.route.navigate(['/subject']);
  }
}
