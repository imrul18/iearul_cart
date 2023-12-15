import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../app.https';
import { SessionService } from '../app.session';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
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
}
