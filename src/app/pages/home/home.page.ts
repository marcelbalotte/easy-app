import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todaysTasksList: Task[];

  constructor(private route: Router, public taskService: TaskService,) { }
  
  ngOnInit() {
    this.todaysTasksList = this.taskService.getTodaysTasks()
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
}
