import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../../modelli/Task';
import { Messaggio, MessaggioTesto } from '../../modelli/Messaggio';
import { SlideInOutWithMarginAnimation } from '../animations';

@Component({
  selector: 'app-elemento-lista',
  templateUrl: './elemento-lista.component.html',
  styleUrls: ['./elemento-lista.component.css'],
  animations: [ SlideInOutWithMarginAnimation ]
})
export class ElementoListaComponent implements OnInit {
  constructor() { }

  @Output() modificaTask = new EventEmitter<MessaggioTesto>();
  @Output() eliminazioneTask = new EventEmitter<Messaggio>();
  @Output() completamentoTask = new EventEmitter<Messaggio>();
  @Input() task: Task;
  @Input() indice: number;

  testoTaskModificato = '';


  animationStateCampoModifica = 'out';
  animationStateComponent = 'in';

  ngOnInit() { }

  iniziaModifica() {
    this.animationStateCampoModifica = this.animationStateCampoModifica === 'in' ? 'out' : 'in';
  }

  inviaModifica() {
    if (this.testoTaskModificato.trim() !== '') {
      this.modificaTask.emit({
        _id: this.task._id,
        indice: this.indice,
        testo: this.testoTaskModificato
      });
    }
    this.testoTaskModificato = '';
  }

  eliminaTask() {
    if (this.task.stato === 'in_corso') {
      this.task.stato = 'eliminato';
      this.eliminazioneTask.emit({
        _id: this.task._id,
        indice: this.indice
      });
    }
  }

  completaTask() {
    if (this.task.stato === 'in_corso') {
      this.task.stato = 'completato';
      this.completamentoTask.emit({
        _id: this.task._id,
        indice: this.indice
      });
    }
  }

}
