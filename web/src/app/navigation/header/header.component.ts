import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  constructor(private localStorageService: LocalStorageService, private router: Router) { }
  isLoggedIn: boolean = false;
  ngOnInit() {
    this.isLoggedIn = this.localStorageService.getUserToken() ? true : false
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onSignOut() {
    this.localStorageService.removeItem('accessToken');
    this.router.navigateByUrl('/home')
  }

  onSignUp() {
    this.router.navigateByUrl('/signup')
  }

  onSignIn() {
    this.router.navigateByUrl('/signin')
  }

  onShowProfile() {
    this.router.navigateByUrl('/profile')
  }

}
