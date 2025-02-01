import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];
  quantities: { [id: number]: number } = {};
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.updateTotal();
    });
    this.cartService.quantities$.subscribe((quantities) => {
      this.quantities = quantities;
      this.updateTotal();
    });
  }

  updateQuantity(productId: number, quantity: number){
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number){
    this.cartService.removeFromCart(productId);
  }

  updateTotal() {
    this.total = this.cartService.calculateTotal();
  }
}
