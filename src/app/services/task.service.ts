import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTodaysTasks() {
    return [new Task(1, "Prova N2", []), new Task(1, "APS", []), new Task(1, "Bater no coleguinha", [])];
  }

  getTaskBySubject() {
    return ['APS', 'Lista de exercícios', 'Xingar o amiguinho', 'N1'];
  }

  constructor() { }
}
