import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CarouselModel } from './models/CarouselModel';

import { gsap } from 'gsap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselContainer') carouselContainer: ElementRef<HTMLDivElement>;
  @ViewChild('carousel') carousel: ElementRef<HTMLDivElement>;

  @Input() data: CarouselModel[];

  baseZIndex = 50;
  scaleRatio = 10;
  middleIndex: number;

  isAnimating = false;
  prevSlideFinished = false;


  constructor() { }

  ngOnInit(): void {
  }

  initCarousel(): void {
    if (this.carousel && this.carousel.nativeElement) {
      gsap.to(this.carousel.nativeElement.children, {
        duration: 0,
        top: '10%',
        left: '15%',
        transform: 'translate(-50%, -50%)'
      });
      this.middleIndex = Math.ceil(this.carousel.nativeElement.childNodes.length / 2);
      const midElement = this.carousel.nativeElement.children[this.middleIndex - 1];
      gsap.to(midElement, {
        duration: 0,
        zIndex: this.baseZIndex,
        width: '650px',
      });
      this.positionLeftNodes(this.middleIndex);
      this.positionRightNodes(this.middleIndex);
    }
  }

  positionLeftNodes(midIndex: number): void {
    let countingForwards = 0;
    let tempZIndex = 0;
    for (let i = midIndex - 1; i >= 0; i--) {
      tempZIndex -= 1;
      countingForwards++;
      const leftNodes = this.carousel.nativeElement.children[i - 1];
      if (leftNodes) {
        gsap.to(leftNodes, {
          duration: 0,
          zIndex: tempZIndex,
          x: -(80 * countingForwards),
          scale: `0.${this.scaleRatio - countingForwards}`
        });
      }
    }
  }

  positionRightNodes(midIndex: number): void {
    const carouselLength = this.carousel.nativeElement.children.length;
    let countingForwards = 0;
    let tempZIndex = this.baseZIndex;
    for (let i = midIndex; i < carouselLength; i++) {
      countingForwards++;
      tempZIndex -= 1;
      const rightNodes = this.carousel.nativeElement.children[i] as HTMLDivElement;
      if (rightNodes) {
        gsap.to(rightNodes, {
          duration: 0,
          zIndex: tempZIndex,
          x: 80 * countingForwards,
          scale: `0.${this.scaleRatio - countingForwards}`
        });
      }
    }
  }

  ngAfterViewInit() {
    this.initCarousel();
  }

  next(): void {
    this.isAnimating = true;
    this.prevSlideFinished = false;
    // dynamically changing element positions
    if (this.middleIndex > 1) {
      this.moveLeftSideAlongWithMainElement();
      this.moveRemainingRightSide();
    }
  }

  get noMoreElements(): boolean {
    return (this.carousel.nativeElement.children[this.middleIndex + 1] === undefined);
  }

  moveLeftSideAlongWithMainElement(): void {
    for (let i = 0; i <= this.middleIndex; i++) {
      const element = this.carousel.nativeElement.children[i] as HTMLDivElement;
      const prevElement = this.carousel.nativeElement.children[i - 1] as HTMLDivElement;
      // getting current style values
      const currentTranslateXValue = gsap.getProperty(element, 'translateX');
      const currZIndex = gsap.getProperty(element, 'zIndex');
      const currentScale = gsap.getProperty(element, 'scale');

      if (currZIndex === this.baseZIndex) {
        // we found main element, move this to right side and decrease z-index
        gsap.to(element, {
          duration: 0.3,
          zIndex: typeof currZIndex === 'number' && currZIndex - 1,
          x: 80,
          scale: '0.9'
        });
        // update previous element z-index to be main
        gsap.to(prevElement, {
          duration: 0.3,
          zIndex: this.baseZIndex
        });
        // update middle index
        this.middleIndex = i;
      } else {
        // move all the remaining elements to right
        gsap.to(element, {
          duration: 0.3,
          zIndex: typeof currZIndex === 'number' && currZIndex + 1,
          x: typeof currentTranslateXValue === 'number' && currentTranslateXValue + 80,
          scale: typeof currentScale === 'number' && parseFloat((currentScale + 0.1).toFixed(1)),
        });
      }
    }
  }

  moveRemainingRightSide(): void {
    const length = this.carousel.nativeElement.children.length;
    for (let i = this.middleIndex; i < length; i++) {
      // style values
      const element = this.carousel.nativeElement.children[i] as HTMLDivElement;
      const currentTranslateXValue = gsap.getProperty(element, 'translateX');
      const currZIndex = gsap.getProperty(element, 'zIndex');
      const currentScale = gsap.getProperty(element, 'scale');

      gsap.to(element, {
        duration: 0.3,
        zIndex: typeof currZIndex === 'number' && currZIndex - 1,
        x: typeof currentTranslateXValue === 'number' && currentTranslateXValue + 80,
        scale: typeof currentScale === 'number' && parseFloat((currentScale - 0.1).toFixed(1)),
        onComplete: () => (this.isAnimating = false)
      });
    }
  }




  // --- prev methods


  moveLeftSideAlongthWithMainElementPrev(): void {
    for (let i = this.middleIndex; i >= 0; i--) {
      // temp variables
      const element = this.carousel.nativeElement.children[i] as HTMLDivElement;
      const nextElement = this.carousel.nativeElement.children[i + 1] as HTMLDivElement;
      // style values
      const currentTranslateXValue = gsap.getProperty(element, 'translateX');
      const currZIndex = gsap.getProperty(element, 'zIndex');
      const currentScale = gsap.getProperty(element, 'scale');

      if (currZIndex === this.baseZIndex) {
        // we found main element, move this to left side and assign negative z index
        gsap.to(element, {
          duration: 0.3,
          zIndex: -1,
          x: typeof currentTranslateXValue === 'number' && currentTranslateXValue - 80,
          scale: typeof currentScale === 'number' && parseFloat((currentScale - 0.1).toFixed(1))
        });
        // update next element z-index to be main
        gsap.to(nextElement, {
          duration: 0.3,
          zIndex: this.baseZIndex,
          x: typeof currentTranslateXValue === 'number' && currentTranslateXValue,
          scale: typeof currentScale === 'number' && parseFloat((currentScale.toFixed(1)))
        });
        this.middleIndex = i + 1;
      } else {
        gsap.to(element, {
          duration: 0.3,
          zIndex: typeof currZIndex === 'number' && currZIndex - 1,
          x: typeof currentTranslateXValue === 'number' && currentTranslateXValue - 80,
          scale: typeof currentScale === 'number' && parseFloat((currentScale - 0.1).toFixed(1)),
          onComplete: () => {
            this.isAnimating = false;
            if (this.noMoreElements) {
              this.prevSlideFinished = true;
            } else {
              this.prevSlideFinished = false;
            }
          }
        });
      }
    }
  }


  moveRemainingRightSidePrev(): void {
    let tempZIndex = this.baseZIndex;
    const length = this.carousel.nativeElement.children.length;
    for (let i = this.middleIndex + 1; i < length; i++) {
      const element = this.carousel.nativeElement.children[i] as HTMLDivElement;
      const currentTranslateXValue = gsap.getProperty(element, 'translateX');
      const currentScale = gsap.getProperty(element, 'scale');
      tempZIndex--;

      gsap.to(element, {
        duration: 0.3,
        zIndex: tempZIndex,
        x: typeof currentTranslateXValue === 'number' && currentTranslateXValue - 80,
        scale: typeof currentScale === 'number' && parseFloat((currentScale + 0.1).toFixed(1))
      });
    }
  }

  prev(): void {
    this.isAnimating = true;
    this.moveLeftSideAlongthWithMainElementPrev();
    this.moveRemainingRightSidePrev();
  }


}