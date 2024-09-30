import { Component, Input } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiForm } from '../../models/UiForm';

@Component({
  selector: 'ui-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './ui-form.component.html',
  styleUrl: './ui-form.component.scss'
})
export class UiFormComponent {
  @Input() formData!: UiForm;
}
