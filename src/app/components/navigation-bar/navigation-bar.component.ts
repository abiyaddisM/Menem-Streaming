import { Component } from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";
import {animate, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../services/auth-service.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent {
  searchToggle = false;
  sideBarToggle = false;
  constructor(public authService:AuthService) {
  }

  toggleSearch() {
    this.searchToggle = !this.searchToggle
  }
  toggleSideBar() {
    this.sideBarToggle = !this.sideBarToggle
  }
}
