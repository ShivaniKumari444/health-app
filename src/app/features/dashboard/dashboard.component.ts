import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="dashboard">
      <h2>Dashboard</h2>
      <p>Overview of your health data and activities.</p>
    </section>
  `,
  styles: [`
    .dashboard {
      padding: 2rem;
      text-align: center;
    }
    .dashboard h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .dashboard p {
      color: #666;
    }
  `]
})
export class DashboardComponent {}
