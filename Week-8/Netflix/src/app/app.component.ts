import { Component, Directive } from '@angular/core';
// import { SearchComponent } from './pages/search/search.component';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netflix';

  constructor(private userService: UserService){}
  
  handleEvent($event: string){
    console.log($event);
    this.userService.setSearch($event)
  }

  isLoggedIn(){
    return this.userService.isLoggedIn()
  }
}
