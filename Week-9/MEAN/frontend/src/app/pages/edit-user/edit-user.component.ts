import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userr: any
  @ViewChild('profileImg', { static: false }) profileImg!: ElementRef<HTMLImageElement> | null;
  @ViewChild('imgInput', { static: false }) imgInput!: ElementRef<HTMLInputElement> | null;

  user!: FormGroup
  submitted: boolean = false
  profileImage: File | undefined;
  userId!: any

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.userId = params['id']
        this.userService.getUserById(this.userId).subscribe(
          (response) => {
            this.userr = response
            this.user = this.formBuilder.group({
              name: [this.userr.name, [Validators.required]],
              email: [this.userr.email, [Validators.required, Validators.email]],
              phone: [this.userr.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            })
          }
        )
      }
    )
  }

  get r() {
    return this.user.controls
  }

  handleUpdate() {
    if (this.user.valid) {
      const formData = new FormData();
      
      formData.append('image', this.profileImage!, this.profileImage!.name);
      formData.append('name', this.user.value.name)
      formData.append('email', this.user.value.email)
      formData.append('phone', this.user.value.phone)
      formData.append('_id', this.userId)
      
      this.userService.update(formData).subscribe(
        (response) => {
          this.userService.setToken(response as string)
          this.router.navigateByUrl('/admin')
        }
      )
    }
  }

  onFileSelected(event: any) {
    this.profileImage = event.target.files[0];
    this.profileImg!.nativeElement.src = URL.createObjectURL(event.target.files[0])
    console.log(this.profileImage);
  }


  onImgClicked() {
    this.imgInput!.nativeElement.click()
  }
}
