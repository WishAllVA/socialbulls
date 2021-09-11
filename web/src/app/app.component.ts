import { Component, HostBinding, OnInit } from '@angular/core';
import { SplashComponent } from './splash/splash.component';
import { fadeIn, fadeOut } from 'src/animations/nav.animation';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navLinkAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '3500ms' } })]),
      // transition('* => void', [useAnimation(fadeOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Sociallbulls';
  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;

  ngOnInit() {
    this.navSlide();
  }

  navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active')
      this.isDrawerOpen = true
    })
  }

  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

}
