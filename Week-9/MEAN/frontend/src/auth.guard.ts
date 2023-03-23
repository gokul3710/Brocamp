import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { UserService } from './app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router:Router, private userService: UserService){}
  canActivate() {
    if(this.userService.getToken()){
      return true;
    }else{
      this.router.navigate(['login'])
      return false
    }
  }

}