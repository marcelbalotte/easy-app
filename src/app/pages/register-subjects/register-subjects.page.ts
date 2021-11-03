import { SubjectService } from './../../services/subject.service';
import { Subject } from './../../models/subject.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-subjects',
  templateUrl: './register-subjects.page.html',
  styleUrls: ['./register-subjects.page.scss'],
})
export class RegisterSubjectsPage implements OnInit {

  materiaCadastro = new Subject();
  
  
  constructor(private route: Router, private subjectService: SubjectService) { }

  ngOnInit() {
  }

  navigateToMainSubjects() {
    this.route.navigate(['/main-subjects']);
  }

  salvarSubject(subject: Subject){
     this.subjectService.cadastrar(subject);
     this.materiaCadastro = new Subject();
  }

  logarData(){
    console.log(this.materiaCadastro.nameSubject);
    console.log(this.materiaCadastro.dateSubject)
  }
}
