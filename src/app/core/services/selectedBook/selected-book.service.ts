import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedBookService {
  public book = new Subject<any>();

  constructor() {}

  setBook(value: any) {
    this.book.next(value);
  }
}
