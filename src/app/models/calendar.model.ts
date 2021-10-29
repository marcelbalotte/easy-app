import { Task } from "./task.model";

export class Calendar {
    id: number;
    date: string;
    description: string;
    task: Task[];
}