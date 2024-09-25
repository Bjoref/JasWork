import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiModalComponent } from '../../ui/ui-modal/ui-modal.component';
import { MatDialogRef } from '@angular/material/dialog';
import { UiButton } from '../../models/uiButton';
import { UiButtonComponent } from '../../ui/ui-button/ui-button.component';
import { UiButtonAppearance, UiButtonTypes } from '../../ui/ui-button/ui-button-states.enum';
import { LoginService } from '../../servers/login-service.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [UiModalComponent, UiButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public closeButton: UiButton = {
    type: UiButtonTypes.button,
    text: 'Закрыть',
    appearance: UiButtonAppearance.secondary,
  };

  public loginButton: UiButton = {
    type: UiButtonTypes.button,
    text: 'Вход',
    appearance: UiButtonAppearance.primary,
  };

  closeDialog = (): void => {
    this.dialogRef.close();
  }

  public toggleAuthentication(): void {
    this.loginService.toggleAuth();
    console.log('Authentication status:', this.loginService.getAuthStatus());
  }

  submitForm = (): void => {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      this.toggleAuthentication();
      this.dialogRef.close(); // Закрываем диалог и передаем данные формы
    } else {
      this.loginForm.markAllAsTouched(); // Отмечаем все поля формы как тронутые, чтобы показать ошибки
    }
  }
}
