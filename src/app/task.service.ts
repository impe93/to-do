import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../modelli/Task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const hostName = 'http://192.168.0.101';

@Injectable()
export class TaskService {

  constructor(
    private http: HttpClient) { }

  // Implementare il controllo degli errori a tutti i metodi

  getTaskDaFare() {
    return this.http.get<Task[]>(`${ hostName }/task`);
  }
  aggiungiNuovoTask(testo: string) {
    return this.http.post<Task>(`${ hostName }/task`, { testo: testo }, httpOptions);
  }
  getTaskCompletati() {
    return this.http.get<Task[]>(`${ hostName }/task/completati`);
  }
  rimuoviTaskCompletati() {
    return this.http.delete(`${ hostName }/task/completati`);
  }
  getTaskCancellati() {
    return this.http.get<Task[]>(`${ hostName }/task/cancellati`);
  }
  rimuoviTaskCancellati() {
    return this.http.delete(`${ hostName }/task/cancellati`);
  }
  aggiornaTask(_id: string, stato: string = '', testo: string = '') {
    if (testo !== '') {
      return this.http.put<Task>(`${ hostName }/task/${ _id }`, { testo: testo }, httpOptions);
    } else if (stato !== '') {
      return this.http.put<Task>(`${ hostName }/task/${ _id }`, { stato: stato }, httpOptions);
    } else {
      return null;
    }
  }
  rimuoviTask(id: string) {
    return this.http.delete<Task>(`${ hostName }/task/${ id }`);
  }
}
