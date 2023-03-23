import { Injectable } from '@angular/core';
import { userModel } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private searchString: string = ''

  constructor() { }

  setSearch(val: string){
    this.searchString = val
  }

  getSearch(){
    return this.searchString
  }
  
  login(user: userModel){
    if(user.email != "user@netflix.com"){
      return false
    }

    if(user.password != "123"){
      return false
    }

    window.sessionStorage.setItem("user" , user.email)
    return true
  }

  logout(){
    window.sessionStorage.removeItem("user")
  }

  isLoggedIn(){
    return window.sessionStorage.getItem("user")
  }
  
}
