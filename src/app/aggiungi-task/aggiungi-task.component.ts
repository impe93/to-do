import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aggiungi-task',
  templateUrl: './aggiungi-task.component.html',
  styleUrls: ['./aggiungi-task.component.css']
})
export class AggiungiTaskComponent implements OnInit {

  @Output() aggiuntaTask = new EventEmitter<string>();
  nuovoTask = '';
  invalido = false;

  constructor() { }

  ngOnInit() { }

  inserisciTask() {
    if (this.nuovoTask.trim() !== '') {
      this.aggiuntaTask.emit(this.nuovoTask);
      this.invalido = false;
    } else {
      this.invalido = true;
    }
    this.nuovoTask = '';
  }

}
