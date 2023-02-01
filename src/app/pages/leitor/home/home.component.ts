import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectedBook } from 'src/app/shared/class-comunication/selectedBook';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges {
  book: any;
  subscription: Subscription | undefined;
  constructor(private selectedBook: SelectedBook) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('aqio');
  }

  ngOnInit(): void {
    console.log(this.selectedBook.book);

    this.subscription = this.selectedBook.book.subscribe((book) => {
      this.book = book;
    });
  }
}
