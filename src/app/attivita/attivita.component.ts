import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Task } from '../../modelli/Task';
import { Messaggio } from '../../modelli/Messaggio';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.css']
})
export class AttivitaComponent implements OnInit {

  @Output() ripristinoTask = new EventEmitter<Messaggio>();
  @Output() rimozioneTask = new EventEmitter<Messaggio>();
  @Input() task: Task;
  @Input() indice: number;

  constructor() { }

  ngOnInit() { }

  rimuoviTask() {
    this.rimozioneTask.emit({
      _id: this.task._id,
      indice: this.indice
    });
  }

  ripristinaTask() {
    this.task.stato = 'in_corso';
    this.ripristinoTask.emit({
      _id: this.task._id,
      indice: this.indice
    });
  }

  setClass() {
    const classe = {
      'list-group-item-success': this.task.stato === 'completato',
      'list-group-item-danger': this.task.stato === 'eliminato'
    };
    return classe;
  }

}
