import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {response} from "express";
import {JwtHelperService} from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials:any) {
    return this.http.post('http://localhost:3000/api/authenticate', credentials)
      .pipe(map((response:any) =>{
        if(response.success){
          localStorage.setItem("token",response.token);
        }
        return response.success
      }))

  }

  logout() {
    localStorage.removeItem('token')
  }

  isLoggedIn() {

    let jwtHelper = new JwtHelperService()
    let token:string = localStorage.getItem('token')!
    if(!token)
      return false
    let expirationDate = jwtHelper.getTokenExpirationDate(token)
    let isExpired = jwtHelper.isTokenExpired(token)
    return !isExpired;
  }
}
