import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../../ui/ui-button/ui-button.component';
import { UiButton } from '../../models/uiButton';

@Component({
  selector: 'ui-item',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './ui-item.component.html',
  styleUrl: './ui-item.component.scss'
})
export class UiItemComponent {
  @Input() buttonData?: UiButton
}
