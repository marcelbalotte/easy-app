import { User } from './../../models/user.model';
import { SubjectService } from './../../services/subject.service';
import { Subject } from './../../models/subject.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register-subjects',
  templateUrl: './register-subjects.page.html',
  styleUrls: ['./register-subjects.page.scss'],
})
export class RegisterSubjectsPage implements OnInit {
  materiaCadastro = new Subject();

  datepipe: DatePipe = new DatePipe('en-US');

  constructor(
    private route: Router,
    private subjectService: SubjectService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {}

  navigateToMainSubjects() {
    this.route.navigate(['/main-subjects']);
  }

  salvarSubject() {
    this.materiaCadastro.user = new User();
    this.materiaCadastro.user.id = 1;

    this.materiaCadastro.data = this.datePipe.transform(
      this.materiaCadastro.data,
      "yyyy-MM-dd'T'HH:mm:ss"
    );
    
    this.subjectService.cadastrar(this.materiaCadastro);
    this.materiaCadastro = new Subject();
  }
}
