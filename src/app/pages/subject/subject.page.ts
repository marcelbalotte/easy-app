import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  pageTitle: string;
  tasks;

  constructor(private route: Router, private taskService: TaskService) {
    const navigation = this.route.getCurrentNavigation();
    const state = navigation.extras.state as {
      pageTitle: string,
    };
    this.pageTitle = state.pageTitle;
  }

  ngOnInit() {
    this.tasks = this.taskService.getTaskBySubject();
  }

  navigateToRegisterTask() {
    this.route.navigate(['/register-task']);
  }

  navigateToMainSubjects() {
    this.route.navigate(['/main-subjects']);
  }
}
