import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Taco {
  name: string;
  description: string;
  price: number;
  label: string;
  isChefsPick: boolean;
}

@Component({
  selector: 'app-featured-tacos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="featured-container">
      <h2>Featured Tacos</h2>
      <div class="taco-grid">
        <div *ngFor="let taco of featuredTacos"
             class="taco-card"
             [class.chefs-pick]="taco.isChefsPick">

          <div class="header">
            <h3>{{ taco.name }}</h3>
            <span class="badge">{{ taco.label }}</span>
          </div>

          <p>{{ taco.description }}</p>
          <div class="footer">
            <span class="price">{{ taco.price | currency }}</span>
            <span *ngIf="taco.isChefsPick" class="pick-label">⭐ Chef's Pick</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .featured-container { padding: 20px; max-width: 800px; margin: 0 auto; }
    .taco-grid { display: grid; gap: 15px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
    .taco-card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; background: #fff; }
    .chefs-pick { border: 2px solid #ff9800; background: #fffde7; }
    .header { display: flex; justify-content: space-between; align-items: center; }
    .badge { background: #e0e0e0; padding: 3px 8px; border-radius: 12px; font-size: 0.8em; }
    .footer { display: flex; justify-content: space-between; margin-top: 10px; font-weight: bold; }
    .pick-label { color: #ff9800; }
  `]
})
export class FeaturedTacosComponent {
  featuredTacos: Taco[] = [
    { name: 'Al Pastor', description: 'Marinated pork with pineapple.', price: 3.50, label: 'Popular', isChefsPick: false },
    { name: 'Diablo Beef', description: 'Spicy shredded beef with habanero salsa.', price: 4.00, label: 'Spicy', isChefsPick: false },
    { name: 'Baja Fish', description: 'Crispy cod with cabbage slaw.', price: 4.50, label: 'New', isChefsPick: true },
    { name: 'Mushroom Carnitas', description: 'Slow-roasted portobello mushrooms.', price: 3.50, label: 'Vegetarian', isChefsPick: false }
  ];
}
