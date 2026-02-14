import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="profile">
      <h2>Profile</h2>
      <p>Manage your personal information and settings.</p>
    </section>
  `,
  styles: [`
    .profile {
      padding: 2rem;
      text-align: center;
    }
    .profile h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .profile p {
      color: #666;
    }
  `]
})
export class ProfileComponent {}
