import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrl: './content-info.component.css'
})
export class ContentInfoComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() path = '';
  @Input() rating = 0;
  @Input() date = '';
  @Input() network = [];
}
