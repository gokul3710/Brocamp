import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from './app/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {
    constructor(public router: Router, public activeRoute: ActivatedRouteSnapshot, private userService: UserService) { }
    canActivate() {
        if (this.userService.getToken()) {
            
            //   this.router.navigate(this.activeRoute.pathFromRoot)
            this.router.navigate([''])
            return false;
        } else {
            console.log('hi');

            this.router.navigate(['login'])
            return true
        }
    }

}