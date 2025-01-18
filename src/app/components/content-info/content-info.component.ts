import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrl: './content-info.component.css',
  animations: [fadeInOut]
})
export class ContentInfoComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() path = '';
  @Input() rating = 0;
  @Input() date = '';
  @Input() network:any = [];
  @Input() genre:any;

  @Input() state = true;
  @Output() stateChange = new EventEmitter();
  onClose(event: Event){
    if (event.target === event.currentTarget) {
      this.state = false;
      this.stateChange.emit();
    }
  }
}
