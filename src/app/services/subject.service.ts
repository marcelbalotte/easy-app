import { Subject } from './../models/subject.model';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  url: string = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  headers = new Headers();

  async listarTodos(id: number): Promise<Subject> {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    return this.http
      .get<Subject>(`${this.url}/materias?id_usuario=${id}`, headers)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  async cadastrar(materia: Subject): Promise<Subject> {
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
      .post<Subject>(`${this.url}/materias`, materia, options)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  async atualizar(materia: Subject): Promise<Subject> {
    return this.http
      .put<Subject>(`${this.url}/materias`, materia)
      .toPromise()
      .then((response) => {
        return response;
      });
  }
}
