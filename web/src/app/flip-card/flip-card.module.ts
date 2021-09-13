import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import { FlipCardFrontComponent } from './flip-card-front';
import { FlipCardBackComponent } from './flip-card-back';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [FlipCardComponent, FlipCardFrontComponent, FlipCardBackComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [FlipCardComponent, FlipCardFrontComponent, FlipCardBackComponent]
})
export class FlipCardModule { }
