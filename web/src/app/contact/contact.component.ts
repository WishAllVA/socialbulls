import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { slideIn, slideInFromRight, slideOut } from 'src/animations/contact.animation';
import { ContactService } from 'src/services/contact.service';

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

  constructor(public contactService: ContactService) { }

  ngOnInit() {

  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email')
  }
  get phone() {
    return this.contactForm.get('phone')
  }

  get message() {
    return this.contactForm.get('message')
  }
  get agree() {
    return this.contactForm.get('agree')
  }

  onSubmit() {
    this.showSpinner = true;
    const name = this.name.value
    const email = this.email.value
    const phone = this.phone.value
    const message = this.message.value
    console.log({ name, email, phone, message })
    this.addContactMessage({ name, email, phone, message })
    setTimeout(() => {
      this.showSpinner = false
      this.contactForm.reset();
      this.contactForm.markAsUntouched();
    }, 2000)
  }

  addContactMessage = ({ name, email, phone, message }) => {
    this.contactService.addContact({
      name,
      email,
      phone,
      message
    }).subscribe((data: any) => {
      console.log(data)
    })
  }

}
