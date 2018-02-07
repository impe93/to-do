import { Component, OnInit } from '@angular/core';
import { Task } from '../../modelli/Task';

@Component({
  selector: 'app-lista-cose-da-fare',
  templateUrl: './lista-cose-da-fare.component.html',
  styleUrls: ['./lista-cose-da-fare.component.css']
})
export class ListaCoseDaFareComponent implements OnInit {

  tasks: Task[] = [];
  tasksEliminati: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

  aggiuntaTask(task: string) {
    this.tasks.push(new Task(task, this.tasks.length));
  }

  modificaTask(oggetto: Task) {
    this.tasks[oggetto.getIndice()] = oggetto;
  }

  eliminaTask(oggetto: Task) {
    this.tasksEliminati.push(oggetto);
    this.tasks.splice(oggetto.getIndice(), 1);
    console.log(this.tasks);
  }

  completaTask(oggetto: Task) {
    this.tasks[oggetto.getIndice()] = oggetto;
  }

}
