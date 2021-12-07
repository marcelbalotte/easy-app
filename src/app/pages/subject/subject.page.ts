import { SubjectService } from './../../services/subject.service';
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
    private subjectService: SubjectService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.pageTitle = history.state.data.nomeMateria;
    this.listarTask(history.state.data.idMateria, history.state.data.idUsuario);
  }

  navigateToRegisterTask() {
    this.route.navigate(['/register-task'], {
      state: {
        data: {
          idUsuario: history.state.data.idUsuario,
          idMateria: history.state.data.idMateria,
        },
      },
    });
  }

  navigateToMainSubjects() {
    this.route.navigate(['/main-subjects'], {
      state: {
        data: {
          idUsuario: history.state.data.idUsuario,
          idMateria: history.state.data.idMateria,
        },
      },
    });
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

  relistarTask() {
    this.listarTask(history.state.data.idMateria, history.state.data.idUsuario);
  }
}
