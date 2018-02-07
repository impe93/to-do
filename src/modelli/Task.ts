export class Task {

  private stato: string;
  private testo: string;
  private indice: number;

  constructor(testo: string, indice: number) {
    this.testo = testo;
    this.indice = indice;
    this.stato = 'in_corso';
  }

  getStato(): string {
    return this.stato;
  }

  setStato(stato: string) {
    this.stato = stato;
  }

  getTesto(): string {
    return this.testo;
  }

  setTesto(testo: string) {
    this.testo = testo;
  }

  getIndice(): number {
    return this.indice;
  }

  setIndice(indice: number) {
    this.indice = indice;
  }

  completaTask() {
    this.stato = 'completato';
  }

  eliminaTaks() {
    this.stato = 'eliminato';
  }
}
