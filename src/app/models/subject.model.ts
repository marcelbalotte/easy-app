import { User } from './user.model';
import { IonDatetime } from "@ionic/angular";
import { Calendar } from "./calendar.model";
import { Task } from "./task.model";

export class Subject {
    id: number;
    nome: string;
    data: string;
    user:User;
}