import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { slideIn, slideOut } from 'src/animations/service.animation';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('servicesAnimation1', [
      transition('void => *', [useAnimation(slideIn, { params: { time: '1500ms' } })]),
      transition('* => void', [useAnimation(slideOut, { params: { time: '1500ms' } })]),
    ]),
    trigger('servicesAnimation2', [
      transition('void => *', [useAnimation(slideIn, { params: { time: '1300ms' } })]),
      transition('* => void', [useAnimation(slideOut, { params: { time: '1300ms' } })]),
    ]),
    trigger('servicesAnimation3', [
      transition('void => *', [useAnimation(slideIn, { params: { time: '1100ms' } })]),
      transition('* => void', [useAnimation(slideOut, { params: { time: '1100ms' } })]),
    ]),
    trigger('servicesAnimation4', [
      transition('void => *', [useAnimation(slideIn, { params: { time: '900ms' } })]),
      transition('* => void', [useAnimation(slideOut, { params: { time: '900ms' } })]),
    ]),
    trigger('servicesAnimation5', [
      transition('void => *', [useAnimation(slideIn, { params: { time: '700ms' } })]),
      transition('* => void', [useAnimation(slideOut, { params: { time: '700ms' } })]),
    ]),
    trigger('servicesAnimation6', [
      transition('void => *', [useAnimation(slideIn, { params: { time: '500ms' } })]),
      transition('* => void', [useAnimation(slideOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
