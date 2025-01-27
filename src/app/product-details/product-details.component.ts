import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../product';
import { PRODUCTS } from '../data/products';
import { RatingStarsPipe } from '../pipes/rating-stars.pipe';


@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, RatingStarsPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product!: Product;
  @Input() id : string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // const productId = this.route.snapshot.params['id'];
    // this.product = PRODUCTS.find((product) => product.id === Number(productId))!;
    console.log(PRODUCTS.find((product: Product) => product.id === Number(this.id))!);
    this.product = PRODUCTS.find((product: Product) => product.id === Number(this.id))!;
  }
}
