import { Task } from './../../models/task.model';
import { TaskService } from './../../services/task.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { User } from 'src/app/models/user.model';
import { AlertController } from '@ionic/angular';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.page.html',
  styleUrls: ['./register-task.page.scss'],
})
export class RegisterTaskPage implements OnInit {
  taskCadastro = new Task();
  formTask: FormGroup;
  datepipe: DatePipe = new DatePipe('en-US');

  constructor(
    private route: Router,
    private datePipe: DatePipe,
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) {
    this.formTask = this.formBuilder.group({
      nomeAtividade: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),

      dataAtividade: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }

  ngOnInit() {}

  navigateToSubject() {
    this.route
    .navigateByUrl('/subject', { skipLocationChange: true })
    .then(() => {
      this.route.navigate(['/subject']);
    });
  }

  salvarTask() {
    this.taskCadastro.materia = new Subject();
    this.taskCadastro.user = new User();

    this.taskCadastro.materia.id = 1;
    this.taskCadastro.user.id = 1;

    this.taskCadastro.data = this.datePipe.transform(
      this.taskCadastro.data,
      "yyyy-MM-dd'T'HH:mm:ss"
    );

    if (this.formTask.valid) {
      this.taskService.cadastrar(this.taskCadastro)
      .then(response =>{
        if (response != null && response.id > 0) {
          this.exibirAlerta('Atividade cadastrada com sucesso!');
        } else {
          this.exibirAlerta('Não foi possível cadastrar atividade!');
        }
      })
      this.taskCadastro = new Task();
    } else {
      this.exibirAlerta('Preencher todos os campos!');
    }
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
