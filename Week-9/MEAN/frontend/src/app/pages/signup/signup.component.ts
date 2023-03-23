import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordChecker } from '../../password-checker';
import { UserService } from '../../services/user.service';
import { user } from '../../user-model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user!: FormGroup
  submitted: boolean = false

  constructor(private router: Router, private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit(): void {

    this.user = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },
      {
        validators: passwordChecker('password', 'confirmPassword')
      })
  }

  get r() {
    return this.user.controls
  }

  handleSignup() {
    this.submitted = true;
    if(this.user.valid){
      const user: user = {
        name: this.user.value.name,
        email: this.user.value.email,
        phone: Number(this.user.value.phone),
        password: this.user.value.password
      }
      console.log(user);
      this.userService.signup(user).subscribe(
        (response)=>{
          this.router.navigateByUrl('/login')
        }
      )
    }
  }
}
