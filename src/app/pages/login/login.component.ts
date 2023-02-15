import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  option = 'cadastrar';
  constructor(
    private readonly auth: AuthService,
    private readonly route: Router
  ) {}

  ngOnInit(): void {
    if (this.auth.IsloggedIn()) {
      this.route.navigate(['/']);
    }
  }

  action(action: string) {
    this.option = action;
  }
}
