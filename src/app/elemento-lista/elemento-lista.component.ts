import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../../modelli/Task';

@Component({
  selector: 'app-elemento-lista',
  templateUrl: './elemento-lista.component.html',
  styleUrls: ['./elemento-lista.component.css']
})
export class ElementoListaComponent implements OnInit {

  constructor() { }

  @Output() modificaTask = new EventEmitter<Task>();
  @Output() eliminazioneTask = new EventEmitter<Task>();
  @Output() completamentoTask = new EventEmitter<Task>();
  @Input() task: Task;
  taskInModifica = false;
  testoTaskModificato = '';

  ngOnInit() { }

  iniziaModifica() {
    this.taskInModifica = !this.taskInModifica;
  }

  inviaModifica() {
    this.modificaTask.emit(new Task(this.testoTaskModificato, this.task.getIndice()));
    this.taskInModifica = false;
  }

  eliminaTask() {
    this.task.eliminaTaks();
    this.eliminazioneTask.emit(this.task);
  }

  completaTask() {
    if (this.task.getStato() === 'in_corso') {
      this.task.completaTask();
      this.completamentoTask.emit(this.task);
    }
  }

  setClass() {
    const classe = {
      'list-group-item-success': this.task.getStato() === 'completato'
    };
    return classe;
  }

}
