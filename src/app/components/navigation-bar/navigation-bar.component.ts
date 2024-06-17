import { Component } from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent {
  searchToggle = false;
  sideBarToggle = false;

  toggleSearch() {
    this.searchToggle = !this.searchToggle
  }
  toggleSideBar() {
    this.sideBarToggle = !this.sideBarToggle
  }
}
