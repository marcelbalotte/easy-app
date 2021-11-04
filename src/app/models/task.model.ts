import { Subject } from './subject.model';
import { User } from './user.model';

export class Task {
  id: number;
  nome: string;
  data: string;
  user: User;
  materia: Subject;
}
