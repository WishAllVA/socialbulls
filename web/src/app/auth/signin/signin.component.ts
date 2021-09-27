import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  showSpinner = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  onSubmit() {
    this.showSpinner = true
    const email = this.email.value
    const password = this.password.value
    this.signin({ email, password })
    setTimeout(() => {
      this.showSpinner = false
      this.loginForm.reset();
      this.loginForm.markAsUntouched();
    }, 2000)
  }

  signin = ({ email, password }) => {
    this.authService.signin({
      email,
      password
    }).subscribe((data: any) => {
      console.log(data)
    })
  }

  goToSignup = () => {
    this.router.navigateByUrl('/signup')
  }

  goToForgotPassword = () => {
    this.router.navigateByUrl('/forgot-password')
  }

}
