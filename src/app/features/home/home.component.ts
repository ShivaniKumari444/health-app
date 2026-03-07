import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroCarouselComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="home">
      <app-hero-carousel></app-hero-carousel>
  `
})
export class HomeComponent {}
