import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiItemComponent } from "../ui-item/ui-item.component";
import { UiButton } from '../../models/uiButton';
import { UiListStates } from './ui-list-states.enum';

@Component({
  selector: 'ui-list',
  standalone: true,
  imports: [UiItemComponent, CommonModule],
  templateUrl: './ui-list.component.html',
  styleUrl: './ui-list.component.scss'
})
export class UiListComponent {
  @Input () items: UiButton[] = [];
  @Input () state: UiListStates = UiListStates.row;

  public UiListStates = UiListStates;
}
