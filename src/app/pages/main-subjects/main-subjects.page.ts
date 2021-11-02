import { Subject } from './../../models/subject.model';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

const navigationExtras: NavigationExtras = {
  state: {
    subject:[]
  },
};

@Component({
  selector: 'app-main-subjects',
  templateUrl: './main-subjects.page.html',
  styleUrls: ['./main-subjects.page.scss']
})
export class MainSubjectsPage implements OnInit {
  constructor(private route: Router, private subjectService: SubjectService) {}

  subjects:any;

  ngOnInit() {
    this.listarSubjects(1);
  }

  navigateToHome() {
    this.route.navigate(['/home']);
  }

  navigateToRegisterSubject() {
    this.route.navigate(['/register-subjects']);
  }

  navigateToSelectedSubject(subject) {
    navigationExtras.state.subject = subject;
    this.route.navigate(['/subject'], navigationExtras);
  }

  listarSubjects(idUsuario: number) {
    return this.subjectService.listarTodos(idUsuario)
    .then((response) => {
      this.subjects = response;
    });
  }
}
