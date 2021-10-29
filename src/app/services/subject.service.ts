import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  getSubjects() {
    return ['Dispositivos Móveis', 'Banco de Dados', 'Gestão de Projetos'];
  }

  constructor() { }
}
