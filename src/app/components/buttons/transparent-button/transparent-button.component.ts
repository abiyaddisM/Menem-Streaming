import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  templateUrl: './transparent-button.component.html',
  styleUrls: ['./transparent-button.component.css']
})
export class TransparentButtonComponent {
  @Input() iconImg = 'assets/Icons/play.svg'
  @Input() text = 'Stream'
  @Input() iconSize = '18px'
  @Input() fontSize = '16px'

}
