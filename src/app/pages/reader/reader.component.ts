import { Component } from '@angular/core';
import { Books } from 'src/app/shared/utils/books';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss'],
})
export class ReaderComponent {
  books = Books.config();
  book: any = null;

  sendBook(book: any) {
    this.book = book;
  }
}
