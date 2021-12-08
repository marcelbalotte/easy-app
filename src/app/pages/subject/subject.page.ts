import { Task } from 'src/app/models/task.model';
import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';

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
    private datePipe: DatePipe,
    public alertController: AlertController
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

  marcarTask(atividade: Task) {
    atividade.marcador = !atividade.marcador;
    
    return this.taskService.marcarTask(atividade).then((response) => {
      if (response != null) {
        this.exibirAlerta("Ativiade marcada com sucesso!");
        this.relistarTask();
      } else {
        this.exibirAlerta("Não foi possível marcar atividade!");
      }
    });
  }

  exibirAlerta(mensagem: string) {
    this.alertController
      .create({
        message: mensagem,
        buttons: ['OK'],
      })
      .then((res) => {
        res.present();
      });
  }
}
