import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/shared/utils/books';
import { SelectedBookService } from '../../services/selectedBook/selected-book.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  books = Books.config();
  constructor(private selectedBookService: SelectedBookService) {}

  ngOnInit(): void {
    console.log(this.books);
  }

  openNav() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
      nav.style.width = '250px';
    }
  }

  closeNav() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
      nav.style.width = '0';
    }
  }
}
