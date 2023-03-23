import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl } from '@angular/forms';
import {  Observable, filter } from 'rxjs';
import { tap } from 'rxjs/operators';
interface user {
  name?: string, email?: string, password?: string, phone?: number, _id?: string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  search: FormControl
  users$: any
  searchKey: any
  constructor(private router: Router, private userService: UserService) {
    this.search = new FormControl('')
  }

  logout() {
    window.sessionStorage.removeItem('admin')
    this.userService.deleteToken()
    this.router.navigateByUrl('admin-login')
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
  
    this.search.valueChanges.subscribe((searchKey: string) => {
      if (searchKey) {
        this.users$ = this.userService.getSearchUsers(searchKey)
      } else {
        this.users$ = this.userService.getAllUsers();
      }
    });
  }
  

  getUsers() {
    this.users$ = this.userService.getAllUsers()
  }

  removeUser(userId: string) {
    this.userService.delete(userId).subscribe(
      (response) => {
        this.getUsers()
      }
    )
  }


}
