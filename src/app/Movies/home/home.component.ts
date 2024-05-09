import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[ ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  private lastScrollTop = 0;
  private scrolled1 = false;
  private scrolled2 = false;
  private scrolled3 = false;
  private scrolled4 =false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = scrollTop > this.lastScrollTop ? 'down' : 'up';
    this.lastScrollTop = scrollTop;

    const scrollAnimation1 = this.elementRef.nativeElement.querySelector('#scroll-animation');
    const scrollAnimation2 = this.elementRef.nativeElement.querySelector('#com-animation');
    const scrollAnimation3 = this.elementRef.nativeElement.querySelector('#sec1')
    const scrollAnimation4 = this.elementRef.nativeElement.querySelector('#sec2')
  
    const sectionPosition1 = scrollAnimation1.getBoundingClientRect().top;
    const sectionPosition2 = scrollAnimation2.getBoundingClientRect().top;
    const sectionPosition3 = scrollAnimation3.getBoundingClientRect().top;
    const sectionPosition4 = scrollAnimation3.getBoundingClientRect().top;



    this.handleAnimation(scrollAnimation1, sectionPosition1, scrollDirection, this.scrolled1);
    this.handleAnimation(scrollAnimation2, sectionPosition2, scrollDirection, this.scrolled2);
    this.handleAnimation(scrollAnimation3, sectionPosition3, scrollDirection, this.scrolled3);
    this.handleAnimation(scrollAnimation4, sectionPosition3, scrollDirection, this.scrolled4);


  }

  private handleAnimation(scrollAnimation: HTMLElement, sectionPosition: number, scrollDirection: string, scrolled: boolean) {
    if (!scrolled && sectionPosition <= 0) {
      scrolled = true;
      scrollAnimation.classList.add('visible-section');
      scrollAnimation.classList.remove('hidden-section');
    } else {
      if (scrollDirection === 'down') {
        const screenPosition = window.innerHeight / 1.5;
        if (sectionPosition < screenPosition) {
          scrollAnimation.classList.add('visible-section');
          scrollAnimation.classList.remove('hidden-section');
        } else {
          scrollAnimation.classList.remove('visible-section');
          scrollAnimation.classList.add('hidden-section');
        }
      } else {
        scrollAnimation.classList.remove('visible-section');
        scrollAnimation.classList.add('hidden-section');
      } 
    }
  }
  
}