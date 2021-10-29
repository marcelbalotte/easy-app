import { Calendar } from "./calendar.model";
import { Task } from "./task.model";

export class Subject {
    id: number;
    name: string;
    tutorName: string;
    task: Task[];
    calendar: Calendar[];
}