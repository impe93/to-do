import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../modelli/Task';

import { AuthService } from './auth.service';

const hostName = 'http://localhost:3000';

@Injectable()
export class TaskService {

  header = {
    headers: { Authorization: `Bearer ${ this.auth.getToken() }` }
  };

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  // Implementare il controllo degli errori a tutti i metodi

  getTaskDaFare() {
    return this.http.get<Task[]>(`${ hostName }/task`, this.header);
  }
  aggiungiNuovoTask(testo: string) {
    return this.http.post<Task>(`${ hostName }/task`, { testo: testo }, this.header);
  }
  getTaskCompletati() {
    return this.http.get<Task[]>(`${ hostName }/task/completati`, this.header);
  }
  rimuoviTaskCompletati() {
    return this.http.delete(`${ hostName }/task/completati`, this.header);
  }
  getTaskCancellati() {
    return this.http.get<Task[]>(`${ hostName }/task/cancellati`, this.header);
  }
  rimuoviTaskCancellati() {
    return this.http.delete(`${ hostName }/task/cancellati`, this.header);
  }
  aggiornaTask(_id: string, stato: string = '', testo: string = '') {
    if (testo !== '') {
      return this.http.put<Task>(`${ hostName }/task/${ _id }`, { testo: testo }, this.header);
    } else if (stato !== '') {
      return this.http.put<Task>(`${ hostName }/task/${ _id }`, { stato: stato }, this.header);
    } else {
      return null;
    }
  }
  rimuoviTask(id: string) {
    return this.http.delete<Task>(`${ hostName }/task/${ id }`, this.header);
  }
}
