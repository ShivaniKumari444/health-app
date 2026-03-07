import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrls: ['./hero-carousel.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'hero-carousel-container'
  }
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  // Carousel images with descriptions
  carouselImages = [
    {
      id: 1,
      src: '/assets/images/health-carousel/health1.jpg',
      alt: 'Healthy lifestyle and wellness',
      title: 'Live Healthier',
      description: 'Track your daily activities and improve your health'
    },
    {
      id: 2,
      src: '/assets/images/health-carousel/health2.jpg',
      alt: 'Fitness and exercise',
      title: 'Stay Fit',
      description: 'Achieve your fitness goals with daily tracking'
    },
    {
      id: 3,
      src: '/assets/images/health-carousel/health3.jpg',
      alt: 'Nutrition and diet',
      title: 'Eat Right',
      description: 'Monitor your nutrition intake effortlessly'
    },
    {
      id: 4,
      src: '/assets/images/health-carousel/health4.jpg',
      alt: 'Mental wellness and meditation',
      title: 'Mind Wellness',
      description: 'Balance your mental and physical health'
    },
    {
      id: 5,
      src: '/assets/images/health-carousel/health5.jpg',
      alt: 'Quality sleep and rest',
      title: 'Better Sleep',
      description: 'Improve sleep quality for better recovery'
    },
    {
      id: 6,
      src: '/assets/images/health-carousel/health6.jpg',
      alt: 'Water intake tracking',
      title: 'Stay Hydrated',
      description: 'Track your daily water consumption'
    },
    {
      id: 7,
      src: '/assets/images/health-carousel/health7.jpg',
      alt: 'Wellness journey progress',
      title: 'Track Progress',
      description: 'Monitor your wellness journey day by day'
    },
    {
      id: 8,
      src: '/assets/images/health-carousel/health8.jpg',
      alt: 'Health metrics and vitals',
      title: 'Health Metrics',
      description: 'Understand your body with detailed analytics'
    }
  ];

  // Signals for state management
  currentIndex = signal(0);
  isAutoPlaying = signal(true);
  autoPlayInterval: any;

  constructor() {
    // Auto-play effect
    effect(() => {
      if (this.isAutoPlaying()) {
        this.startAutoPlay();
      } else {
        this.stopAutoPlay();
      }
    });
  }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  /**
   * Start auto-play carousel
   */
  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 2000); // Change slide every 5 seconds
  }

  /**
   * Stop auto-play carousel
   */
  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  /**
   * Navigate to next slide
   */
  nextSlide(): void {
    this.stopAutoPlay();
    const newIndex = (this.currentIndex() + 1) % this.carouselImages.length;
    this.currentIndex.set(newIndex);
    if (this.isAutoPlaying()) {
      this.startAutoPlay();
    }
  }

  /**
   * Navigate to previous slide
   */
  prevSlide(): void {
    this.stopAutoPlay();
    const newIndex = (this.currentIndex() - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.currentIndex.set(newIndex);
    if (this.isAutoPlaying()) {
      this.startAutoPlay();
    }
  }

  /**
   * Go to specific slide by index
   */
  goToSlide(index: number): void {
    this.stopAutoPlay();
    this.currentIndex.set(index);
    if (this.isAutoPlaying()) {
      this.startAutoPlay();
    }
  }

  /**
   * Toggle auto-play
   */
  toggleAutoPlay(): void {
    this.isAutoPlaying.update(prev => !prev);
  }

  /**
   * Pause on mouse enter
   */
  onMouseEnter(): void {
    this.isAutoPlaying.set(false);
  }

  /**
   * Resume on mouse leave
   */
  onMouseLeave(): void {
    this.isAutoPlaying.set(true);
  }

  /**
   * Get current slide
   */
  getCurrentSlide() {
    return this.carouselImages[this.currentIndex()];
  }

  /**
   * Check if slide is active
   */
  isActive(index: number): boolean {
    return this.currentIndex() === index;
  }
}
