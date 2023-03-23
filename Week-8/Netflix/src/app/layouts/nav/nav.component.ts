import { Component, ElementRef, HostListener, Renderer2, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable, Subscriber, filter, fromEvent, map, pluck, take, reduce, scan, tap } from 'rxjs';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('formInput', { static: false }) formInput: ElementRef<HTMLInputElement> | null;
  @ViewChild('searchForm', { static: false }) form: ElementRef<HTMLInputElement> | null;
  isScrolled = false;
  formActive = false;
  searchString: string = ''
  @Output() event: EventEmitter<string> = new EventEmitter
  obs$: Observable<any>|null = null
  obs: any
  i: number = 0

  constructor(private renderer: Renderer2, private router: Router, private userService: UserService) {
    this.formInput = null;
    this.form = null
  }

  observable = fromEvent(document,'keydown')

  newobs = this.observable.pipe(
    // take(5),
    pluck('code'),
    filter(code => code === 'Space'),
    tap(console.log),
    scan(
      (acc,val) => acc + Number((val as string).length) ,0
    )
  )

  ngOnInit(): void {
    this.obs$ = this.newobs
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.innerWidth > 599)
      this.isScrolled = window.pageYOffset > 0;
  }

  formChange() {
    this.formActive = !this.formActive;

    if (this.formInput !== null) {
      if (window.innerWidth > 599){
        this.formInput.nativeElement.style.width = '15rem';
      }else{
        this.formInput.nativeElement.style.width = '10rem';
      }
      this.form!.nativeElement.style.opacity = "1"
    }
  }

  searchTextChanged() {
    this.event.emit(this.searchString)
    this.router.navigateByUrl('/search')
    if (!this.searchString) {
      this.formInput!.nativeElement.style.width = '0';
      setTimeout(() => {
        this.form!.nativeElement.style.opacity = "0"
        this.formActive = !this.formActive;
      }, 200)
    }
  }

  handleLogout(){
    this.userService.logout()
    this.router.navigateByUrl('/login')
  }
}
