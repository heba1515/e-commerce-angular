import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  private quantities = new BehaviorSubject<{ [id: number]: number }>({});

  cartItems$ = this.cartItems.asObservable();
  quantities$ = this.quantities.asObservable();

  addToCart(product: any) {
    const currentItems = this.cartItems.value;
    const currentQuantities = this.quantities.value;

    if (!currentItems.find((item) => item.id === product.id)) {
      this.cartItems.next([...currentItems, product]);
    }
    this.quantities.next({
      ...currentQuantities,
      [product.id]: (currentQuantities[product.id] || 0) + 1,
    });
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value.filter(
      (item) => item.id !== productId
    );
    const currentQuantities = { ...this.quantities.value };
    delete currentQuantities[productId];
    this.cartItems.next(currentItems);
    this.quantities.next(currentQuantities);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentQuantities = { ...this.quantities.value };
    if (quantity > 0) {
      currentQuantities[productId] = quantity;
    } else {
      delete currentQuantities[productId];
      this.removeFromCart(productId);
    }
    this.quantities.next(currentQuantities);
  }

  calculateTotal(): number {
    const items = this.cartItems.value;
    const quantities = this.quantities.value;
    return items.reduce(
      (total, item) => total + item.price * (quantities[item.id] || 0),
      0
    );
  }
}
