import { Component, ChangeDetectionStrategy, ElementRef, HostListener, Input, Signal, WritableSignal, signal, effect, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Slide {
  image: string;
  alt: string;
}

const SLIDES: Slide[] = [
  { image: 'assets/images/health-carousel/health1.jpg', alt: 'Healthy breakfast with fruits and grains' },
  { image: 'assets/images/health-carousel/health2.jpg', alt: 'Person jogging in the morning' },
  { image: 'assets/images/health-carousel/health3.jpg', alt: 'Yoga and meditation session' },
  { image: 'assets/images/health-carousel/health4.jpg', alt: 'Balanced meal with vegetables' },
  { image: 'assets/images/health-carousel/health5.jpg', alt: 'Cycling for fitness' },
  { image: 'assets/images/health-carousel/health6.jpg', alt: 'Mental wellness and relaxation' },
  { image: 'assets/images/health-carousel/health7.jpg', alt: 'Outdoor group workout' },
  { image: 'assets/images/health-carousel/health8.jpg', alt: 'Healthy lunch bowl' },
  { image: 'assets/images/health-carousel/health9.jpg', alt: 'Stretching and flexibility' },
  { image: 'assets/images/health-carousel/health10.jpg', alt: 'Hydration and water intake' },
  { image: 'assets/images/health-carousel/health11.jpg', alt: 'Strength training' },
  { image: 'assets/images/health-carousel/health12.jpg', alt: 'Peaceful sleep' },
  { image: 'assets/images/health-carousel/health13.jpg', alt: 'Nature walk' },
  { image: 'assets/images/health-carousel/health14.jpg', alt: 'Healthy snacks' },
  { image: 'assets/images/health-carousel/health15.jpg', alt: 'Mindful breathing' },
  { image: 'assets/images/health-carousel/health16.jpg', alt: 'Active lifestyle' },
];

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'tabindex': '0',
    'role': 'region',
    'aria-label': 'Health and Wellness Hero Carousel',
    '[class.carousel-focused]': 'isFocused()'
  }
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides: Slide[] = SLIDES;
  currentIndex: WritableSignal<number> = signal(0);
  isPaused: WritableSignal<boolean> = signal(false);
  isFocused: WritableSignal<boolean> = signal(false);
  intervalId: any = null;

  get totalSlides() {
    return this.slides.length;
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.clearAutoSlide();
  }

  startAutoSlide() {
    this.clearAutoSlide();
    this.intervalId = setInterval(() => {
      if (!this.isPaused()) {
        this.next();
      }
    }, 5000);
  }

  clearAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.totalSlides) % this.totalSlides);
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.totalSlides);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }

  onMouseEnter() {
    this.isPaused.set(true);
  }

  onMouseLeave() {
    this.isPaused.set(false);
  }

  onFocus() {
    this.isFocused.set(true);
    this.isPaused.set(true);
  }

  onBlur() {
    this.isFocused.set(false);
    this.isPaused.set(false);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (!this.isFocused()) return;
    if (event.key === 'ArrowRight') {
      this.next();
      event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
      event.preventDefault();
    }
  }

  // Touch swipe support
  private touchStartX = 0;
  private touchEndX = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const delta = this.touchEndX - this.touchStartX;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
}
