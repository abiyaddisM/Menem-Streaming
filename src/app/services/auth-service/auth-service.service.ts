import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {response} from "express";
import {JwtHelperService} from "@auth0/angular-jwt";
import {error} from "@angular/compiler-cli/src/transformers/util";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }
  getUser(){
    if(!this.isLoggedIn())
      return
    let token:string = localStorage.getItem('token')!
    let jwtHelper = new JwtHelperService()
    const decoded = jwtHelper.decodeToken(token);
    return decoded.user.id;
  }

  login(credentials:any) {
      return this.http.post('https://socket.bizawit.com/api/v1/auth', credentials)
      .pipe(map((response:any) =>{
        console.log("Done")
        console.log(response)
        if(response.success){
          localStorage.setItem("token",response.token);
        }
        return response.success
      }) )

  }

  logout() {
    localStorage.removeItem('token')
  }

  isLoggedIn() {
    let jwtHelper = new JwtHelperService()
    let token:string = localStorage.getItem('token')!
    if(!token)
      return false
    // let expirationDate = jwtHelper.getTokenExpirationDate(token)
    let isExpired = jwtHelper.isTokenExpired(token)
    return !isExpired;
  }
}
