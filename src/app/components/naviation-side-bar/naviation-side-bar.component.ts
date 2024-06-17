import {Component, EventEmitter, Input, Output} from '@angular/core';
import {slideInOut} from "../../animations/slide-animation";

@Component({
  selector: 'app-naviation-side-bar',
  templateUrl: './naviation-side-bar.component.html',
  styleUrls: ['./naviation-side-bar.component.css'],
  animations: [slideInOut]
})
export class NaviationSideBarComponent {

  @Input() sideBarToggle = false
  @Output() booleanChange = new EventEmitter<boolean>();
  toggleSideBar(){
    this.booleanChange.emit(this.sideBarToggle)
    this.sideBarToggle = !this.sideBarToggle
  }
}
