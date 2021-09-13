import { Component, OnInit } from '@angular/core';
import { data } from '../helpers/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = data
  constructor() { }

  ngOnInit() {
  }

}
