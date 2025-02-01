import { Component, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../product';
import { PRODUCTS } from '../data/products';
import { ProductService } from '../services/product.service';
import { RatingStarsPipe } from '../pipes/rating-stars.pipe';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, CurrencyPipe, RatingStarsPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const paramId = Number(params['id']);
      this.productService
          .getProductDetails(paramId)
          .subscribe((response) => {
            console.log(response);
            this.product = response;
          });
    })
  }

  addToCart() {
    // this.cartService.addToCart(1);
    this.cartService.addToCart(this.product);
  }
}
