import { Calendar } from "./calendar.model";

export class Task {
    id: number;
    name: string;
    calendar: Calendar[];

    constructor(id:number, name: string, calendar: Calendar[]) { 
        this.id = id;
        this.name = name;
        this.calendar = calendar;
    } 
}