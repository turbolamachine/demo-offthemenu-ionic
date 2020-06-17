import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public cart: any;

  constructor() {
    this.cart = [];
  }

  addToCart() {
    this.cart.push("product");
  }
}
