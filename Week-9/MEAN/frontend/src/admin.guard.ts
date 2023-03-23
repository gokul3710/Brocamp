import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { UserService } from './app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public router:Router, private userService: UserService){}
  canActivate() {
    if(window.sessionStorage.getItem('admin')){
      return true;
    }else{
      this.router.navigateByUrl('admin-login')
      return false
    }
  }

}