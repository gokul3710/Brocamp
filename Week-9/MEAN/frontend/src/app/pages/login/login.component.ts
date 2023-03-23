import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { user } from '../../user-model';
import { Store } from '@ngrx/store';
import { loginRequest } from 'src/app/state/login/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: FormGroup
  submitted: boolean = false

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private store: Store) { }

  ngOnInit(): void {

    this.user = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  get r() {
    return this.user.controls
  }

  handleLogin() {
    if(this.user.valid){
      this.store.dispatch(loginRequest({ credentials: { email: this.user.value.email, password: this.user.value.password } }));
      // this.userService.login(this.user.value).subscribe(
      //   (response: any)=>{
      //     this.userService.setToken(response[1])
      //     this.router.navigateByUrl('/')
      //   }
      // )
    }
  }
}
