import { Component, OnInit } from '@angular/core';
import { SelectedBookService } from 'src/app/core/services/selectedBook/selected-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  book: any = null;
  constructor(private selectedBookService: SelectedBookService) {}

  ngOnInit(): void {
    this.book = null;
    this.selectedBookService.getBook().subscribe((book) => {
      this.book = book;
    });
  }
}
