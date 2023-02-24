import { Component, OnInit } from '@angular/core';
import { SelectedBookService } from 'src/app/core/services/selectedBook/selected-book.service';
import { Books } from 'src/app/shared/utils/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books = Books.config();
  book: any = null;
  constructor(private selectedBookService: SelectedBookService) {}

  ngOnInit(): void {
    console.log(this.books);
  }

  sendBook(book: any) {
    this.book = book;
  }
}
