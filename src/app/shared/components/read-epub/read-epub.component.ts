import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import ePub, { Book, Layout } from 'epubjs';
import Annotations from 'epubjs/types/annotations';
import Rendition from 'epubjs/types/rendition';

@Component({
  selector: 'app-read-epub',
  templateUrl: './read-epub.component.html',
  styleUrls: ['./read-epub.component.scss'],
})
export class ReadEpubComponent implements OnChanges {
  @Input() urlEpub = '';
  rendition!: Rendition;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.readyEpub(this.urlEpub);
  }

  readyEpub(url: string): void {
    this.resetEpub();
    const book = ePub(url);

    this.rendition = book.renderTo('area', {
      width: '100%',
      height: 460,
      ignoreClass: 'annotator-hl',
      manager: 'continuous',
    });
    this.rendition.display();
    this.rendition.themes.default({
      '::selection': {
        background: 'rgba(255,255,0, 0.3)',
      },
      '.epubjs-hl': {
        fill: 'yellow',
        'fill-opacity': '0.3',
        'mix-blend-mode': 'multiply',
      },
    });
    this.rendition.on('rendered', (section: any) => {
      console.log('########### section ', section);
    });

    this.rendition.on('selected', (select: any) => {
      this.config(book, select);
    });
    this.rendition.on('relocated', (location: any) => {
      console.log(location);
    });
    book.ready
      .then((b) => {
        return b;
      })
      .then((c) => {
        console.log(c);
      });
  }

  nextPage(): void {
    this.rendition.next();
  }

  previewPage(): void {
    this.rendition.prev();
  }

  config(book: Book, cfiRange: any) {
    const highlights = document.getElementById('highlights');
    book.getRange(cfiRange).then((range) => {
      let text;
      const li = document.createElement('li');
      const a = document.createElement('a');
      const remove = document.createElement('a');
      let textNode;
      console.log(range);

      if (range) {
        text = range.toString();
        textNode = document.createTextNode(text);

        a.textContent = cfiRange;
        a.href = '#' + cfiRange;
        a.onclick = () => {
          this.rendition.display(cfiRange);
        };

        remove.textContent = 'remove';
        remove.href = '#' + cfiRange;
        remove.onclick = () => {
          // annotations.remove(cfiRange, 'remove');
          return false;
        };

        li.appendChild(a);
        li.appendChild(remove);
        highlights?.appendChild(li);
      }
    });
  }

  resetEpub() {
    const area = document.getElementById('area');
    const highlights = document.getElementById('highlights');
    if (area && highlights) {
      area.innerHTML = '';
      highlights.innerHTML = '';
    }
  }
}
