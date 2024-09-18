import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth-service/auth-service.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user-service/user-service.service";
import {GeneralValidators} from "../../validators/general.validators";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  loading = false;
  invalidError = false;


  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,Validators.minLength(4),Validators.maxLength(30),GeneralValidators.invalidCharacters],
      GeneralValidators.usernameTaken),

    email: new FormControl('',
      [Validators.required,Validators.email,Validators.maxLength(50
      )],
      GeneralValidators.emailTaken),

    password: new FormControl('',
      [Validators.required,Validators.minLength(8),GeneralValidators.cannotContainSpace]),

    confirmPassword: new FormControl('',
      [Validators.required])
  },
    GeneralValidators.passwordsMatch('password', 'confirmPassword')
    )
  get username(){
    return this.form.get('username')
  }
  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }
  get confirmPassword(){
    return this.form.get('confirmPassword')
  }
  constructor(private userService:UserService,private route:Router) {
  }
  signUp(credentials:any){
    if(!this.form.valid)
      return
    this.loading = true
    const newUser = {
      username:credentials.username,
      email:credentials.email,
      password:credentials.password,
      profilePath:''
    }
    this.userService.signUp(credentials).subscribe((res:any)=>{
      if(res.success){
        alert()
        this.route.navigate(['/sign-in'])
      }
      this.loading = false
    })
  }

}
