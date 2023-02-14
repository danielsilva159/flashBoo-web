import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() respostaSuccess = new EventEmitter();
  private readonly notifier: NotifierService;
  registerForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  constructor(
    private readonly userService: UserService,
    private readonly notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {}

  submit() {
    this.userService.createUser(this.registerForm.value).subscribe({
      next: (user) => {
        this.registerForm.reset();
        this.respostaSuccess.emit('entrar');
        this.notifier.show({
          type: 'success',
          message: 'Usuário cadastrado com sucesso',
        });
      },
      error: (err) => {
        console.log(err);
        this.notifier.show({ type: 'error', message: err.error.message });
      },
    });
    console.log(this.registerForm.value);
  }
}
