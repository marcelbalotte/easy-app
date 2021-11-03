import { IonDatetime } from "@ionic/angular";
import { Calendar } from "./calendar.model";
import { Task } from "./task.model";

export class Subject {
    idSubject: number;
    nameSubject: string;
    taskSubject: Task[];
    dateSubject: Date;
}