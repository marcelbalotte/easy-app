import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url: string = 'http://192.168.15.11:8081/api';

  headers = new Headers();

  constructor(private http: HttpClient) {}

  async listarPorMateria(id: number, idMateria: number): Promise<Task> {
    return this.http
      .get<Task>(
        `${this.url}/atividades/materia?id_materia=${idMateria}&id_usuario=${id}`
      )
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

  async cadastrar(atividade: Task): Promise<Task> {
    let headers = new HttpHeaders();

    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Credentials', 'true');
    this.headers.append(
      'Access-Control-Allow-Methods',
      'GET,HEAD,OPTIONS,POST,PUT'
    );
    this.headers.append(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );

    let options = {
      headers: headers,
    };

    return this.http
      .post<Task>(`${this.url}/atividades`, atividade, options)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  async marcarTask(atividade: Task): Promise<Task> {
    let headers = new HttpHeaders();

    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Credentials', 'true');
    this.headers.append(
      'Access-Control-Allow-Methods',
      'GET,HEAD,OPTIONS,POST,PUT,PATCH'
    );
    this.headers.append(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );

    let options = {
      headers: headers,
    };

    return this.http
      .put<Task>(`${this.url}/atividades/${atividade.id}`, null, options)
      .toPromise()
      .then((response) => {
        return response;
      });
  }
}
