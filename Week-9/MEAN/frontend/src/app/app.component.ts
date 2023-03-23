import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { user } from './user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'ngrx-login';
  user!: any
  admin: any 

  constructor(private userService: UserService){}


  ngDoCheck(): void {
    this.admin = window.sessionStorage.getItem('admin')
  }

  
}
