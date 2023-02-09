import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnChanges {
  logado = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.url);
  }

  ngOnChanges() {}
}
