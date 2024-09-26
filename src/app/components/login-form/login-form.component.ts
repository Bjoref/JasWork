import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UiButton } from '../../models/uiButton';
import { UiButtonComponent } from '../../ui/ui-button/ui-button.component';
import {
  UiButtonAppearance,
  UiButtonTypes,
} from '../../ui/ui-button/ui-button-states.enum';
import { LoginService } from '../../servers/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [UiButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  public loginButtonText: string = 'Вход'; //@todo будет зависеть от статуса авторизации юзера

  @Input() buttonData?: UiButton;

  @Input() callbackFunction!: () => void;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public loginButton: UiButton = {
    type: UiButtonTypes.button,
    text: this.loginButtonText,
    appearance: UiButtonAppearance.primary,
  };

  public toggleAuthentication(): void {
    this.loginService.toggleAuth();

    if (this.isAuthenticated()) {
      this.loginButtonText = 'Выход';
      this.router.navigate(['/main']);
    } else {
      this.loginButtonText = 'Вход';
    }

    this.updateLoginButtonStates();

  }

  public isAuthenticated(): boolean {
    return this.loginService.getAuthStatus();
  }

  public updateLoginButtonStates(): void {
    this.loginButton = {
      ...this.loginButton,
      text: this.loginButtonText,
    };
  }

  submitForm = (): void => {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      this.toggleAuthentication();
    } else {
      this.loginForm.markAllAsTouched(); // Отмечаем все поля формы как тронутые, чтобы показать ошибки
    }
  };
}