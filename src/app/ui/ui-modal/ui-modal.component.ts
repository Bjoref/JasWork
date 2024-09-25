import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ui-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-modal.component.html',
  styleUrl: './ui-modal.component.scss',
})
export class UiModalComponent {
  @Input() modalTitle: string = '';
  @Input() hideCloseButton = false;
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialogRef: MatDialogRef<UiModalComponent>) {}

  close(result?: any): void {
    this.closeEvent.emit()
    this.dialogRef.close(result);
  }
}
