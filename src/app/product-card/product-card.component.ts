import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product';
import { RatingStarsPipe } from '../pipes/rating-stars.pipe';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, CurrencyPipe, RatingStarsPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor(private router: Router) {}

  handleRedirectToDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }
}
