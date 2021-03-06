import { Component, HostBinding, OnInit } from '@angular/core';
import { SplashComponent } from './splash/splash.component';
import { fadeIn, fadeOut } from 'src/animations/nav.animation';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { data } from './helpers/data';
import { LocalStorageService } from './local-storage.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';


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
  data = data;
  isLoggedIn: boolean = false;
  config: PerfectScrollbarConfigInterface = {
    wheelSpeed: 0.7
  }
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.localStorageService.getUserToken() ? true : true;
  }

}
