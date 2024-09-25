import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoComponent } from '../../ui/ui-logo/ui-logo.component';
import { UiListComponent } from '../../ui/ui-list/ui-list.component';
import { UiButtonComponent } from '../../ui/ui-button/ui-button.component';
import { UiButton } from '../../models/uiButton';
import {
  UiButtonAppearance,
  UiButtonTypes,
} from '../../ui/ui-button/ui-button-states.enum';
import { LoginService } from '../../servers/login-service.service';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, UiListComponent, UiButtonComponent],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'], // Обратите внимание на правильное имя свойства "styleUrls"
})
export class AppHeaderComponent {
  constructor(private loginService: LoginService, public dialog: MatDialog) {}

  public loginButtonText: string = 'Вход'; //@todo будет зависеть от статуса авторизации юзера
  public mainLink: string = '/login'; //@todo будет зависеть от статуса авторизации юзера
  public navLinks: UiButton[] = [
    {
      type: UiButtonTypes.link,
      text: 'Главная',
      link: this.mainLink,
    },
    {
      type: UiButtonTypes.link,
      text: 'О сайте',
      link: '/about',
    },
    {
      type: UiButtonTypes.link,
      text: 'Блог',
      link: '/blog',
    },
  ];

  public loginButton: UiButton = {
    type: UiButtonTypes.button,
    text: this.loginButtonText,
    appearance: UiButtonAppearance.primary,
  };

  // Метод для получения текущего состояния аутентификации
  public isAuthenticated(): boolean {
    return this.loginService.getAuthStatus();
  }
  
  public updateLoginButtonStates(): void {
    this.loginButton = {
      ...this.loginButton,
      text: this.loginButtonText,
    };
  }
  public login = (): void => {
    if (this.isAuthenticated()) {
      this.loginButtonText = 'Вход';
      this.updateLoginButtonStates();
      this.loginService.toggleAuth();
    } else {
      this.openDialog();
    }
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '560px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.afterDialogClose();
    });
  }

  afterDialogClose(): void {
    if (this.isAuthenticated()) {
      this.loginButtonText = 'Выход';
    } else {
      this.loginButtonText = 'Вход';
    }

    this.updateLoginButtonStates();
  }
}
