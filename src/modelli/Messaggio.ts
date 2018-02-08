import { Task } from './Task';

export class Messaggio {
  task: Task;
  indice: number;

  constructor (task: Task, indice: number) {
    this.task = task;
    this.indice = indice;
  }
}
