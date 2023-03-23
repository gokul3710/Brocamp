import { Component, ElementRef, HostListener, Renderer2, ViewChild, OnInit, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { UserService } from '../../services/user.service';
import { Observable, Subscriber, filter, fromEvent, map, pluck, take, reduce, scan, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,OnChanges {
  

  user: any

  isScrolled = false;
  formActive = false;

  constructor(private renderer: Renderer2, private router: Router,private userService: UserService) {}


  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user)=>{
        this.user = user
        console.log(user);
      }
    )
  }

  ngOnChanges(){
    console.log(this.user);
    
  }

  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.innerWidth > 599)
      this.isScrolled = window.pageYOffset > 0;
  }

  logout(){
    // this.userService.logout()
    this.userService.deleteToken()
    this.router.navigateByUrl('login')
  }

  login(){
    this.router.navigateByUrl('login')
  }

  isLoggedIn(){
    return this.userService.getToken()
  }

}
