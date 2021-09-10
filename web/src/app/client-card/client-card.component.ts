import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  @Input() title: string
  @Input() url: string
  @Input() visitUrl: string
  constructor() { }

  ngOnInit() {
  }

  goToUrl(visitUrl: string) {
    window.open(visitUrl)
  }


}
