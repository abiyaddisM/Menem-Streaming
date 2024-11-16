import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  animations:[fadeInOut]
})
export class ConfirmDialogComponent {
  @Input() title: string= '';
  @Input() state = false;
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  onCancel(){
    this.cancel.emit();
  }
  onConfirm(){
    this.confirm.emit();
  }
}
