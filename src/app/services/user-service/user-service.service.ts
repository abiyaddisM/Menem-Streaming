import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
 static url = "https://socket.bizawit.com"

  private static httpClient: HttpClient;
  constructor(private http: HttpClient,private router:Router) {
    UserService.httpClient = http
  }
  signUp(credentials:any){
    return this.http.post(`${UserService.url}/api/v1/user`,credentials)

  }
  static uniqueUsername(username:string):Observable<any>{
    return UserService.httpClient.post(`${UserService.url}/api/v1/unique/username`,{username})
  }
  static uniqueEmail(email:string):Observable<any>{
    return UserService.httpClient.post(`${UserService.url}/api/v1/unique/email`,{email})
  }
}
