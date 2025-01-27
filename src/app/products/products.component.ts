import { Component } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../data/products';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = PRODUCTS;

}
