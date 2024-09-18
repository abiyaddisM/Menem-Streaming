import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../auth-service/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService,private rout:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    if(this.authService.isLoggedIn())
      return true
    this.rout.navigate(['/sign-in'])
    return false
  }
}
