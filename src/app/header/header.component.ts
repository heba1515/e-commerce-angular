import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [RouterLink , RouterLinkActive, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faCartShopping = faCartShopping;

  cartCount: number = 0;

  constructor(private cartService: CartService) {
    // this.cartService.cartCount.subscribe((count) => {
    //   this.cartCount = count;
    // });
    this.cartService.quantities$.subscribe((quantities) => {
      this.cartCount = Object.values(quantities).reduce(
        (total, qty) => total + qty,
        0
      );
    });
  }
}
