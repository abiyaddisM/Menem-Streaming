import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {slideLeftOut, slideRightIn, slideRightOut} from "../../animations/slide-animation";
import {AuthService} from "../../services/auth-service/auth-service.service";
import {response} from "express";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
})
export class SignInPageComponent{
  loading = false;
  invalidError = false;


  form = new FormGroup({
    identifier: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor(private authService:AuthService,private route:Router) {
  }
  signIn(credentials:any){
    this.loading = true
    this.authService.login(credentials).subscribe(
      (response:any) =>{
        this.loading = false
        console.log("The response: ",response)
        if(response)
          this.route.navigate(["/"])
        else
          this.invalidError = true

      },
      (error:any) =>{
        console.log("This is the shit")
        console.log(error)
        if(error.status === 401)
          this.invalidError = true
        this.loading = false
      }
    )

  }

}
