import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home">
      <h1>Welcome to HealthApp</h1>
      <p class="subtitle">Your personal health management dashboard</p>
      <div class="quick-stats">
        <div class="stat">
          <span class="stat-value">8,500</span>
          <span class="stat-label">Steps Today</span>
        </div>
        <div class="stat">
          <span class="stat-value">72 bpm</span>
          <span class="stat-label">Heart Rate</span>
        </div>
        <div class="stat">
          <span class="stat-value">6.5 hrs</span>
          <span class="stat-label">Sleep</span>
        </div>
      </div>
      <div class="goals-activity">
        <div class="goals">
          <h2>Today's Goals</h2>
          <ul>
            <li>Walk at least 10,000 steps</li>
            <li>Drink 2L of water</li>
            <li>Sleep before 11:00 PM</li>
          </ul>
        </div>
        <div class="activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>🏃‍♂️ 2km morning run</li>
            <li>🥗 Healthy breakfast</li>
            <li>🧘‍♀️ 10 min meditation</li>
          </ul>
        </div>
      </div>
      <blockquote class="motivation">“The secret of getting ahead is getting started.”<br><span>- Mark Twain</span></blockquote>
    </section>
  `,
  styles: [`
    .home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 60vh;
      text-align: center;
      padding: 2rem 1rem;
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
    }
    .home h1 {
      font-size: 2.3rem;
      margin-bottom: 0.5rem;
      color: #2563eb;
      font-weight: 700;
    }
    .subtitle {
      color: #4b5563;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
    .quick-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 2.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .stat {
      background: #f1f5fb;
      border-radius: 12px;
      padding: 1.2rem 2.2rem;
      box-shadow: 0 2px 8px rgba(34,46,60,0.06);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 120px;
    }
    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: #222e3c;
    }
    .stat-label {
      font-size: 1rem;
      color: #6b7280;
      margin-top: 0.3rem;
    }
    .goals-activity {
      display: flex;
      gap: 2.5rem;
      margin-bottom: 2.5rem;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .goals, .activity {
      background: #fff;
      border-radius: 10px;
      padding: 1.2rem 2rem;
      box-shadow: 0 1px 4px rgba(34,46,60,0.06);
      min-width: 220px;
      max-width: 320px;
      flex: 1 1 220px;
      text-align: left;
    }
    .goals h2, .activity h2 {
      font-size: 1.1rem;
      color: #2563eb;
      margin-bottom: 0.7rem;
      font-weight: 600;
    }
    .goals ul, .activity ul {
      list-style: disc inside;
      padding: 0;
      margin: 0;
      color: #374151;
      font-size: 1rem;
    }
    .goals li, .activity li {
      margin-bottom: 0.5rem;
    }
    .motivation {
      margin-top: 2.5rem;
      font-size: 1.1rem;
      color: #2563eb;
      background: #e0e7ef;
      border-left: 4px solid #2563eb;
      border-radius: 6px;
      padding: 1rem 1.5rem;
      font-style: italic;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    .motivation span {
      display: block;
      font-size: 0.95rem;
      color: #4b5563;
      margin-top: 0.5rem;
      font-style: normal;
    }
    @media (max-width: 700px) {
      .quick-stats {
        flex-direction: column;
        gap: 1.2rem;
      }
      .goals-activity {
        flex-direction: column;
        gap: 1.2rem;
      }
      .goals, .activity {
        padding: 1rem 1rem;
        min-width: 0;
        max-width: 100%;
      }
    }
  `]
})
export class HomeComponent {}
