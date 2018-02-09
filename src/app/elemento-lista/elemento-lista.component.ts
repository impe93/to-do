import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../../modelli/Task';
import { Messaggio } from '../../modelli/Messaggio';
import { SlideInOutAnimation } from '../animations';

@Component({
  selector: 'app-elemento-lista',
  templateUrl: './elemento-lista.component.html',
  styleUrls: ['./elemento-lista.component.css'],
  animations: [ SlideInOutAnimation ]
})
export class ElementoListaComponent implements OnInit {

  constructor() { }

  @Output() modificaTask = new EventEmitter<Messaggio>();
  @Output() eliminazioneTask = new EventEmitter<Messaggio>();
  @Output() completamentoTask = new EventEmitter<Messaggio>();
  @Input() task: Task;
  @Input() indice: number;

  testoTaskModificato = '';
  animationState = 'out';

  ngOnInit() { }

  iniziaModifica() {
    this.animationState = this.animationState === 'in' ? 'out' : 'in';
  }

  inviaModifica() {
    this.modificaTask.emit(new Messaggio(new Task(this.testoTaskModificato), this.indice));
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
