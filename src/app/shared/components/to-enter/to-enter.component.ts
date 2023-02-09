import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-enter',
  templateUrl: './to-enter.component.html',
  styleUrls: ['./to-enter.component.scss'],
})
export class ToEnterComponent implements OnInit {
  logarEmail = false;
  constructor() {}

  ngOnInit(): void {}

  buttonLogarEmail() {
    this.logarEmail = true;
  }
}
