import { Task } from './Task';

export interface Messaggio {
  _id: string;
  indice: number;
}

export interface MessaggioTesto {
  _id: string;
  indice: number;
  testo: string;
}
