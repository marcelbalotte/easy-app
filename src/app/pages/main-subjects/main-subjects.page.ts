import { Subject } from 'src/app/models/subject.model';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main-subjects',
  templateUrl: './main-subjects.page.html',
  styleUrls: ['./main-subjects.page.scss'],
})
export class MainSubjectsPage implements OnInit {
  constructor(
    private route: Router,
    private subjectService: SubjectService,
    public alertController: AlertController
  ) {}

  subjects: any;

  ngOnInit() {
    this.listarSubjects(history.state.data.idUsuario);
  }

  navigateToHome() {
    this.route.navigate(['/home'], {
      state: {
        data: {
          idUsuario: history.state.data.idUsuario,
          idMateria: null,
        },
      },
    });
  }

  navigateToRegisterSubject() {
    this.route.navigate(['/register-subjects'], {
      state: {
        data: {
          idUsuario: history.state.data.idUsuario,
          idMateria: null,
        },
      },
    });
  }

  navigateToSelectedSubject(subject: any) {
    this.route.navigate(['/subject'], {
      state: {
        data: {
          idUsuario: history.state.data.idUsuario,
          idMateria: subject.id,
          nomeMateria: subject.nome,
        },
      },
    });
  }

  listarSubjects(idUsuario: number) {
    return this.subjectService.listarTodos(idUsuario).then((response) => {
      this.subjects = response;
    });
  }

  relistarSubjects() {
    this.listarSubjects(history.state.data.idUsuario);
  }

  deletarSubject(materia: Subject) {
    return this.subjectService.deletar(materia).then((response) => {
      this.exibirAlerta("Matéria excluída com sucesso!")
      this.relistarSubjects();
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
