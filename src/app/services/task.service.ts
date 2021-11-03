import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  url: string = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  async listarPorMateria(id: number, idMateria: number): Promise<Task> {
    return this.http
      .get<Task>(`${this.url}/atividades/materia?id_materia=${idMateria}&id_usuario=${id}`)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  async listarDiarias(id: number): Promise<Task> {
    return this.http
      .get<Task>(`${this.url}/atividades/atividades_do_dia?id_usuario=${id}`)
      .toPromise()
      .then((response) => {
        return response;
      });
  }
}
