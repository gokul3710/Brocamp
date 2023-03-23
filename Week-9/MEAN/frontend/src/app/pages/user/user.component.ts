import { Component, OnInit, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResolveEnd, Router } from '@angular/router';
import { passwordChecker } from '../../password-checker';
// import { user } from '../../user-model';
import { UserService } from '../../services/user.service';
// import { Subscriber } from 'rxjs';
// import { NavComponent } from '../../layouts/nav/nav.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userr:any
  @ViewChild('profileImg', { static: false }) profileImg!: ElementRef<HTMLImageElement> | null;
  @ViewChild('imgInput', { static: false }) imgInput!: ElementRef<HTMLInputElement> | null;

  user!: FormGroup
  submitted: boolean = false
  profileImage: File | undefined;


  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user)=>{
        this.userr = user
        console.log(user);
        this.user = this.formBuilder.group({
          name: [this.userr.name, [Validators.required]],
          email: [this.userr.email, [Validators.required, Validators.email]],
          phone: [this.userr.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
          currentPassword: ['', [Validators.required, Validators.minLength(8)]],
          newPassword: ['', [Validators.required, Validators.minLength(8)]],
          confirmNewPassword: ['', [Validators.required]]
        },
          {
            validators: passwordChecker('newPassword', 'confirmNewPassword')
          }
        ) 
      }
    )
  }

 
  


  get r() {
    return this.user.controls
  }

  handleUpdate(){
    if(this.user.valid){
      console.log(this.user.value)
      const formData = new FormData();
      formData.append('image', this.profileImage!, this.profileImage!.name);
      formData.append('name', this.user.value.name)
      formData.append('email', this.user.value.email)
      formData.append('phone', this.user.value.phone)
      formData.append('password', this.user.value.currentPassword)
      formData.append('newPassword', this.user.value.newPassword)
      this.userService.update(formData).subscribe(
        (response)=>{
          this.userService.setToken(response as string)
          this.router.navigateByUrl('/')
        }
      )
    }
  }

  onFileSelected(event: any) {
    this.profileImage = event.target.files[0];
    this.profileImg!.nativeElement.src = URL.createObjectURL(event.target.files[0])
    console.log(this.profileImage);
  }


  onImgClicked(){
    this.imgInput!.nativeElement.click()
  }
}
