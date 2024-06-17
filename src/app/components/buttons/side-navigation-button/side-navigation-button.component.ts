import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-side-navigation-button',
  templateUrl: './side-navigation-button.component.html',
  styleUrls: ['./side-navigation-button.component.css']
})
export class SideNavigationButtonComponent {
  @Input() isActive = false
  @Input() name = ''
  @Input() icon = ''
  @Input() router_Link = ''
}
