import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { userModel } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // user: userModel = {
  //   email: '',
  //   password: ''
  // }

  user: any

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
       
    this.user = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    })

  }

  handleLogin(){
    console.log(this.user.value);
    
    let logged = this.userService.login(this.user.value)
    if(logged){
      this.router.navigateByUrl('/')
    }
  }

}
