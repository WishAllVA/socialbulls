import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { rotate, fadeIn, fadeOut } from 'src/animations/logo.animation';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('logoAnimation', [
      // transition('void => *', [useAnimation(rotate, { params: { time: '1000ms', startAngle: '0', endAngle: '360deg' } }), useAnimation(rotate, { params: { time: '1000ms', startAngle: '360deg', endAngle: '0' } })]),
      transition('void => *', [useAnimation(fadeIn, { params: { time: '800ms' } }), useAnimation(fadeOut, { params: { time: '800ms' } }), useAnimation(fadeIn, { params: { time: '800ms' } }), useAnimation(fadeOut, { params: { time: '800ms' } })]),
      // transition('void => *', []),
    ])
  ]
})
export class SplashComponent implements OnInit {

  windowWidth: string;
  showSplash: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.windowWidth = '-' + window.innerWidth + 'px';
      setTimeout(() => {
        this.showSplash = false;
      }, 700)
    }, 3200)
  }


}
