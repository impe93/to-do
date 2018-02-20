import { Component, OnInit } from '@angular/core';

import { Task } from '../../modelli/Task';
import { Messaggio, MessaggioTesto } from '../../modelli/Messaggio';
import { SlideInOutAnimation } from '../animations';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-lista-cose-da-fare',
  templateUrl: './lista-cose-da-fare.component.html',
  styleUrls: ['./lista-cose-da-fare.component.css'],
  animations: [ SlideInOutAnimation ]
})
export class ListaCoseDaFareComponent implements OnInit {

  tasks: Task[] = [];
  animationStateListaAttivi = 'in';

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTaskDaFare()
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  aggiuntaTask(testo: string) {
    this.taskService.aggiungiNuovoTask(testo)
      .subscribe((task: Task) => {
        if (task) {
          this.tasks.push(task);
        }
      });
  }

  modificaTask(messaggio: MessaggioTesto) {
    this.taskService.aggiornaTask(messaggio._id, '', messaggio.testo)
      .subscribe((task: Task) => {
        if (task) {
          this.tasks[messaggio.indice] = task;
        }
      });
  }

  completaEliminaTask(messaggio: Messaggio) {
    this.taskService.aggiornaTask(messaggio._id, this.tasks[messaggio.indice].stato)
      .subscribe((task: Task) => {
        if (task) {
          this.tasks.splice(messaggio.indice, 1);
        }
      });
  }

}
