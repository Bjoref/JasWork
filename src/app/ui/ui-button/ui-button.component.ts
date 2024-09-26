import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  UiButtonAppearance, UiButtonTypes } from './ui-button-states.enum';
import { UiButton } from '../../models/uiButton';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss'
})
export class UiButtonComponent {
  @Input() buttonData?: UiButton;
  @Input() width_100: boolean = false;

  @Input() callbackFunction!: () => void;


  public UiButtonAppearance = UiButtonAppearance;

  triggerParentFunction(): void {
    if (this.callbackFunction) {
      this.callbackFunction();
    }
  }

}
