export class Task {

  private stato: string;
  private testo: string;

  constructor(testo: string) {
    this.testo = testo;
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

  completaTask() {
    this.stato = 'completato';
  }

  eliminaTaks() {
    this.stato = 'eliminato';
  }
}
