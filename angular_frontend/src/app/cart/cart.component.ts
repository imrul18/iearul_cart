import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../app.https';
import { SessionService } from '../app.session';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private https: ApiService
  ) {
    // using api to store cart items
    // const session = this.sessionService.getSessionId();
    // const res = this.https.get(`cart/${session}`);
    // if (res) {
    //   this.cartItems = cart;
    // }

    // using local storage to store cart items
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cartItems = JSON.parse(cart);
    }
  }
  cartItems: Product[] = [];

  increaseItem(product: Product): void {
    this.cartItems.push(product);
  }
  decreaseItem(product: Product): void {
    this.cartItems.push(product);
  }
}
