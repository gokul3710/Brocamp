import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin!: FormGroup
  submitted: boolean = false

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {

    this.admin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  get r() {
    return this.admin.controls
  }

  handleLogin() {
    if(this.admin.valid){
      console.log(this.admin.value);
      
        if(this.admin.value.email != 'admin@admin.com'){
          console.log("Wrong Email"); 
          return "Wrong Email"
        }
        if(this.admin.value.password != '12345678'){
          console.log("Wrong Password");
          return "wrong password"
        }

        window.sessionStorage.setItem('admin','true')
        this.router.navigateByUrl('admin')
        return true
      // this.userService.login(this.user.value).subscribe(
      //   (response: any)=>{
      //     this.userService.setToken(response[1])
      //     this.router.navigateByUrl('/')
      //   }
      // )
    }
    return false
  }

}
