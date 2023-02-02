import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedBookService {
  private book = new BehaviorSubject<any>(undefined);

  constructor() {}

  setBook(value: any) {
    this.book.next(value);
    console.log(this.book);
  }

  getBook(): Observable<any> {
    return this.book.asObservable();
  }
}
