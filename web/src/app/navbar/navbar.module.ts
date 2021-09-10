import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavdrawerComponent } from './navdrawer/navdrawer.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavdrawerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavdrawerComponent
  ]
})
export class NavbarModule { }
