import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import ePub from 'epubjs';
import Rendition from 'epubjs/types/rendition';

@Component({
  selector: 'app-read-epub',
  templateUrl: './read-epub.component.html',
  styleUrls: ['./read-epub.component.scss'],
})
export class ReadEpubComponent implements OnChanges {
  @Input() urlEpub: string = '';
  rendition!: Rendition;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.readyEpub(this.urlEpub);
  }

  readyEpub(url: string): void {
    const book = ePub(url);
    this.rendition = book.renderTo('area', { width: '100%', height: '500px' });
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
