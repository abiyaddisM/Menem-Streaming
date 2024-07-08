import {Component, HostListener, OnInit} from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";
import {animate, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../services/auth-service.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  animations: [fadeInOut]

})

export class NavigationBarComponent implements OnInit{
  searchToggle = false;
  sideBarToggle = false;
  username = ''
  constructor(public authService:AuthService,public deviceService:DeviceService) {
  }

  toggleSearch() {
    this.searchToggle = !this.searchToggle
  }
  toggleSideBar() {
    this.sideBarToggle = !this.sideBarToggle
  }
  openSearch(){

  }
  ngOnInit(): void {
    let jwtHelper = new JwtHelperService();
    if(this.authService.isLoggedIn()){
      const token = localStorage.getItem('token') || '';
      const decoded = jwtHelper.decodeToken(token);
      this.username = decoded.username;
    }


  }
  @HostListener('document:keydown.control.space', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Check if Ctrl + Space is pressed
    if (event.ctrlKey && event.code === 'Space') {
      this.toggleSearch()
    }
  }
}
