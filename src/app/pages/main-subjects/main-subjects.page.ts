import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-main-subjects',
  templateUrl: './main-subjects.page.html',
  styleUrls: ['./main-subjects.page.scss'],
})
export class MainSubjectsPage implements OnInit {
  constructor(private route: Router, private subjectService: SubjectService) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  subjects;

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();
  }

  navigateToHome() {
    this.route.navigate(['/home']);
  }


  navigateToRegisterSubject(){
    this.route.navigate(['/register-subjects']);
  }

  navigateToSelectedSubject(subject) {
    navigationExtras.state.pageTitle = subject;
    this.route.navigate(['/subject'], navigationExtras);
  }
}

const navigationExtras: NavigationExtras = {
  state: {
    pageTitle: '',
  }


};
