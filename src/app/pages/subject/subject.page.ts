import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  pageTitle: string;
  idSubject: number;
  tasks: any;

  constructor(
    private route: Router,
    private taskService: TaskService,
    private datePipe: DatePipe
  ) {
    const navigation = this.route.getCurrentNavigation();

    const state = navigation.extras.state as {
      subject: any;
    };

    this.pageTitle = state.subject.nome;
    this.idSubject = state.subject.id;
  }

  ngOnInit() {
    this.listarTask(this.idSubject, 1);
  }

  navigateToRegisterTask() {
    this.route.navigate(['/register-task']);
  }

  navigateToMainSubjects() {
    this.route.navigate(['/main-subjects']);
  }

  listarTask(idMateria: number, idUsuario: number) {
    return this.taskService
      .listarPorMateria(idUsuario, idMateria)
      .then((response) => {
        this.tasks = response;

        if (response != null) {
          this.tasks.forEach((element) => {
            element.data_atividade = this.datePipe.transform(
              element.data_atividade,
              'dd/MM/yyyy'
            );
          });
        }
      });
  }
}
