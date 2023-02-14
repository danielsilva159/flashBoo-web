import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  option = 'cadastrar';
  constructor() {}

  ngOnInit(): void {}

  action(action: string) {
    this.option = action;
  }
}
