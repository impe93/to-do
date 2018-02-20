import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TaskService } from '../task.service';

import { Task } from '../../modelli/Task';
import { Messaggio } from '../../modelli/Messaggio';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tasks: Task[] = [];
  tasks$: Subscription;
  listaAttuale = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        if (params.get('tipoLista') === 'eliminate') {
          this.listaAttuale = 'eliminate';
          return this.taskService.getTaskCancellati();
        } else if (params.get('tipoLista') === 'completate') {
          this.listaAttuale = 'completate';
          return this.taskService.getTaskCompletati();
        } else {
          this.router.navigate(['/pagina-non-trovata']);
        }
        return null;
      })
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  rimuoviEliminateCompletate() {
    if (this.listaAttuale === 'eliminate') {
      this.taskService.rimuoviTaskCancellati()
        .subscribe((message: string) => {
          if (message) {
            this.tasks = [];
          }
        });
    } else if (this.listaAttuale === 'completate') {
      this.taskService.rimuoviTaskCompletati()
        .subscribe((message: string) => {
          if (message) {
            this.tasks = [];
          }
        });
    }
  }

  rimuoviTask(messaggio: Messaggio) {
    this.taskService.rimuoviTask(messaggio._id)
      .subscribe((message) => {
        if (message) {
          this.tasks.splice(messaggio.indice, 1);
        }
      });
  }

  ripristinaTask(messaggio: Messaggio) {
    this.taskService.aggiornaTask(messaggio._id, this.tasks[messaggio.indice].stato)
      .subscribe((task: Task) => {
        if (task) {
          this.tasks.splice(messaggio.indice, 1);
        }
      });
  }

}
