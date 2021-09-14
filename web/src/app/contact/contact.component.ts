import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { slideIn, slideInFromRight, slideOut } from 'src/animations/contact.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('contactAnimation1', [
      transition('void => *', [useAnimation(slideIn, { params: { time: '800ms' } })]),
      transition('* => void', [useAnimation(slideOut, { params: { time: '800ms' } })]),
    ]),
    trigger('contactAnimation2', [
      transition('void => *', [useAnimation(slideInFromRight, { params: { time: '800ms' } })]),
      transition('* => void', [useAnimation(slideOut, { params: { time: '800ms' } })]),
    ])
  ]
})
export class ContactComponent implements OnInit {
  showSpinner = false;
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    service: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    monthlyNewsletter: new FormControl(false, Validators.required),
    agree: new FormControl(false, Validators.requiredTrue),
  });

  constructor() { }

  ngOnInit() {

  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email')
  }

  get message() {
    return this.contactForm.get('message')
  }
  get agree() {
    return this.contactForm.get('agree')
  }

  onSubmit() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
      this.contactForm.reset();
      this.contactForm.markAsUntouched();
    }, 2000)
  }

}
