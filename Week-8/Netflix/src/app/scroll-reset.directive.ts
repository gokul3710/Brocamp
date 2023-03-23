import { Directive, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Directive({
  selector: '[appscrollReset]'
})
export class ScrollResetDirective implements OnInit {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
