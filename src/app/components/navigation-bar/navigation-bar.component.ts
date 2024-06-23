import {Component, OnInit} from '@angular/core';
import {fadeInOut} from "../../animations/fade-animation";
import {animate, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../services/auth-service.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit{
  searchToggle = false;
  sideBarToggle = false;
  username = ''
  constructor(public authService:AuthService) {
  }

  toggleSearch() {
    this.searchToggle = !this.searchToggle
  }
  toggleSideBar() {
    this.sideBarToggle = !this.sideBarToggle
  }

  ngOnInit(): void {
    let jwtHelper = new JwtHelperService();
    if(this.authService.isLoggedIn()){
      const token = localStorage.getItem('token') || '';
      const decoded = jwtHelper.decodeToken(token);
      this.username = decoded.username;
      console.log(this.username)
    }


  }
}
