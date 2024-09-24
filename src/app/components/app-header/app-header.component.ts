import { Component } from '@angular/core';
import { LogoComponent } from '../../ui/ui-logo/ui-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
