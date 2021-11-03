import { Subject } from './../models/subject.model';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url: string = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  async listarTodos(id: number): Promise<Subject> {
    return this.http
      .get<Subject>(`${this.url}/materias?id_usuario=${id}`)
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  async cadastrar(materia: Subject): Promise<Subject> {
    return this.http
      .post<Subject>(`${this.url}/materias`, materia)
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
