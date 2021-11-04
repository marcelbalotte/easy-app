import { Task } from './../../models/task.model';
import { TaskService } from './../../services/task.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { User } from 'src/app/models/user.model';
import { TmplAstElement } from '@angular/compiler';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.page.html',
  styleUrls: ['./register-task.page.scss'],
})
export class RegisterTaskPage implements OnInit {
  taskCadastro = new Task();

  constructor(
    private route: Router,
    private datePipe: DatePipe,
    private taskService: TaskService
  ) {}

  ngOnInit() {}

  navigateToSubject() {
    this.route.navigate(['/subject']);
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

    this.taskService.cadastrar(this.taskCadastro);
    
    this.taskCadastro = new Task();
  }
}
