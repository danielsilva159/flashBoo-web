import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-to-enter',
  templateUrl: './to-enter.component.html',
  styleUrls: ['./to-enter.component.scss'],
})
export class ToEnterComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private readonly route: Router
  ) {}

  ngOnInit(): void {}

  logar() {
    this.loginService.login(this.form.value).subscribe((res: any) => {
      localStorage.setItem('token_flashboo', res.access_token);
      this.route.navigate(['/']);
    });
  }
}
