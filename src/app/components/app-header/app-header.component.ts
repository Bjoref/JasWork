import { Component } from '@angular/core';
import { LogoComponent } from '../../ui/ui-logo/ui-logo.component';
import { UiListComponent } from "../../ui/ui-list/ui-list.component";
import { UiButtonComponent } from '../../ui/ui-button/ui-button.component'; 
import { UiButton } from '../../models/uiButton';
import { UiButtonAppearance, UiButtonTypes } from '../../ui/ui-button/ui-button-states.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, UiListComponent, UiButtonComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  public loginButtonText: string = 'Вход'; //@todo будет зависеть от статуса авторизации юзера
  public mainLink: string = '/login';  //@todo будет зависеть от статуса авторизации юзера
  public navLinks: UiButton[] = [
    {
      type: UiButtonTypes.link,
      text: 'Главная',
      link: this.mainLink
    },
    {
      type: UiButtonTypes.link,
      text: 'О сайте',
      link: '/about'
    },
    {
      type: UiButtonTypes.link,
      text: 'Блог',
      link: '/blog'
    },
  ]

  public loginButton: UiButton = {
    type: UiButtonTypes.button,
    text: this.loginButtonText,
    appearance: UiButtonAppearance.primary
  }


}
