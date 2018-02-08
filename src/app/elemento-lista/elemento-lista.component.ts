import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../../modelli/Task';
import { Messaggio } from '../../modelli/Messaggio';

@Component({
  selector: 'app-elemento-lista',
  templateUrl: './elemento-lista.component.html',
  styleUrls: ['./elemento-lista.component.css']
})
export class ElementoListaComponent implements OnInit {

  constructor() { }

  @Output() modificaTask = new EventEmitter<Messaggio>();
  @Output() eliminazioneTask = new EventEmitter<Messaggio>();
  @Output() completamentoTask = new EventEmitter<Messaggio>();
  @Input() task: Task;
  @Input() indice: number;
  taskInModifica = false;
  testoTaskModificato = '';

  ngOnInit() { }

  iniziaModifica() {
    this.taskInModifica = !this.taskInModifica;
  }

  inviaModifica() {
    this.modificaTask.emit(new Messaggio(new Task(this.testoTaskModificato), this.indice));
    this.taskInModifica = false;
  }

  eliminaTask() {
    this.task.eliminaTaks();
    this.eliminazioneTask.emit(new Messaggio(this.task, this.indice));
  }

  completaTask() {
    if (this.task.getStato() === 'in_corso') {
      this.task.completaTask();
      this.completamentoTask.emit(new Messaggio(this.task, this.indice));
    }
  }

  setClass() {
    const classe = {
      'list-group-item-success': this.task.getStato() === 'completato'
    };
    return classe;
  }

}
