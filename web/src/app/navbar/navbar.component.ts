import {
  Component,
  HostListener,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import { NavdrawerComponent } from './navdrawer/navdrawer.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navElement: HTMLElement;
  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.navElement = null;
    this.isDrawerOpen = false;
  }

  ngAfterViewInit() {
    this.navElement = <HTMLElement>document.getElementById("navbar");
  }

  @HostListener("window:scroll", ["$event"])
  onScroll($event: Event) {
    let scrollFactor = 200;
    let opacity = (window.pageYOffset / scrollFactor);
    opacity = opacity < 1 ? opacity : 1;
    if (opacity <= 1) {
      this.navElement.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";
    }

    if (window.pageYOffset / scrollFactor > 1) {
      this.navElement.classList.add("navbar-shadow");
    } else {
      this.navElement.classList.remove("navbar-shadow");
    }
  }

  toggleNavDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

}
