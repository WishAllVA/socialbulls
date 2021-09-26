import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showSpinner = false;
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  get name() {
    return this.signupForm.get('name')
  }
  get email() {
    return this.signupForm.get('email')
  }
  get phone() {
    return this.signupForm.get('phone')
  }
  get password() {
    return this.signupForm.get('password')
  }
  get confirm_password() {
    return this.signupForm.get('confirm_password')
  }

  onSubmit() {
    this.showSpinner = true
    const name = this.name.value
    const email = this.email.value
    const phone = this.phone.value
    const password = this.password.value
    this.signup({ name, email, phone, password })
    setTimeout(() => {
      this.showSpinner = false
      this.signupForm.reset();
      this.signupForm.markAsUntouched();
    }, 2000)
  }

  signup = ({ name, email, phone, password }) => {
    this.authService.signin({
      email,
      password
    }).subscribe((data: any) => {
      console.log(data)
    })
  }

  goToLogin = () => {
    this.router.navigateByUrl('/signin')
  }
}
