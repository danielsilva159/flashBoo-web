import { Subject } from 'rxjs';

export class SelectedBook {
  public book = new Subject<any>();
  setBook(value: any) {
    this.book.next(value);
  }
}
