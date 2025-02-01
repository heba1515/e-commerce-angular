import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product';
import { RatingStarsPipe } from '../pipes/rating-stars.pipe';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, CurrencyPipe, RatingStarsPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product: any;

  constructor(private router: Router, private cartService: CartService) {}

  addToCart() {
    // this.cartService.addToCart(1);
    this.cartService.addToCart(this.product);
  }

  handleRedirectToDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }
}
