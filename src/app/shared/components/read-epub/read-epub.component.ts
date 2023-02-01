import { Component, Input, OnInit } from '@angular/core';
import ePub from 'epubjs';
import Rendition from 'epubjs/types/rendition';

@Component({
  selector: 'app-read-epub',
  templateUrl: './read-epub.component.html',
  styleUrls: ['./read-epub.component.scss'],
})
export class ReadEpubComponent implements OnInit {
  rendition!: Rendition;

  constructor() {}

  @Input() urlEpub: string = '';

  ngOnInit(): void {
    this.readyEpub(this.urlEpub);
  }

  readyEpub(url: string): void {
    var book = ePub(url);
    this.rendition = book.renderTo('area', { width: '100%', height: 600 });
    this.rendition.display();

    this.rendition.on('rendered', (section: any) => {
      console.log('########### section ', section);
    });
  }

  nextPage(): void {
    this.rendition.next();
  }

  previewPage(): void {
    this.rendition.prev();
  }
}