import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todaysTasksList: any;

  constructor(
    private route: Router,
    public taskService: TaskService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.listarTaskDiarias(1);
  }

  navigateToMainSubjects() {
    this.route.navigate(['/main-subjects']);
  }

  navigateToCalendar() {
    this.route.navigate(['/calendar']);
  }

  navigateToLogin() {
    this.route.navigate(['/login']);
  }

  listarTaskDiarias(idUsuario: number) {
    return this.taskService.listarDiarias(idUsuario).then((response) => {
      this.todaysTasksList = response;
      if (response != null) {
        this.todaysTasksList.forEach((element) => {
          element.data_atividade = this.datePipe.transform(
            element.data_atividade,
            'dd/MM/yyyy'
          );
        });
      }
    });
  }
}
