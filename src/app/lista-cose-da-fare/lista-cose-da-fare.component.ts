import { Component, OnInit } from '@angular/core';
import { Task } from '../../modelli/Task';
import { Messaggio } from '../../modelli/Messaggio';

@Component({
  selector: 'app-lista-cose-da-fare',
  templateUrl: './lista-cose-da-fare.component.html',
  styleUrls: ['./lista-cose-da-fare.component.css']
})
export class ListaCoseDaFareComponent implements OnInit {

  tasks: Task[] = [];
  tasksEliminati: Task[] = [];
  tasksCompletati: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

  aggiuntaTask(task: string) {
    this.tasks.push(new Task(task));
  }

  modificaTask(messaggio: Messaggio) {
    this.tasks[messaggio.indice] = messaggio.task;
  }

  eliminaTask(messaggio: Messaggio) {
    if (this.tasks.splice(messaggio.indice, 1) !== []) {
      this.tasksEliminati.push(messaggio.task);
    }
  }

  completaTask(messaggio: Messaggio) {
    if (this.tasks.splice(messaggio.indice, 1) !== []) {
      this.tasksCompletati.push(messaggio.task);
    }
  }

  rimuoviCompletate() {
    this.tasksCompletati = [];
  }

  rimuoviEliminate() {
    this.tasksEliminati = [];
  }

}
