import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeOut, slideIn, slideOut } from '../../animations/carousel.animation'
import { ClientCardComponent } from '../client-card/client-card.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '500ms' } })]),
      transition('* => void', [useAnimation(fadeOut, { params: { time: '500ms' } })]),
    ])
  ]
})
export class ClientsComponent implements OnInit {
  clientData = [
    {
      title: 'Tinder',
      imageUrl: '../../assets/images/tinder.png',
      visitUrl: 'https://www.tinder.com'
    },
    {
      title: 'Google',
      imageUrl: '../../assets/images/google.png',
      visitUrl: 'https://www.google.com'
    }
  ]
  currentSlide = 0;
  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.clientData.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.clientData.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
  }

}
