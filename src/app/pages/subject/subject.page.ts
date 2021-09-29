import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  pageTitle: string;

  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    const state = navigation.extras.state as {
      pageTitle: string,
    };
    this.pageTitle = state.pageTitle;
  }

  ngOnInit() {
  }

  navigateToMainSubjects() {
    this.route.navigate(['/main-subjects']);
  }
}
