import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { ModalController } from '@ionic/angular';
import { CartPage } from '../cart/cart.page';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public cart: {
    totalPrice: number,
    items: CartItem[]
  };

  constructor(public modalController: ModalController) {
    // Cart is empty when app starts
    this.cart = {
      totalPrice: 0,
      items: []
    };
  }

  /*
  * Adds one or multiple items to cart
  */
  addToCart(productName, productId, productImage, price, price_extras, quantity, options, extras) {

    // Unique Id
    let uniqueId = '_' + Math.random().toString(36).substr(2, 9);

    // Calcul total price
    for(let ext of extras) {
      if(ext.value) {
        price += price_extras;
      }
    }

    // Item to add
    let item = {
        id: uniqueId,
        productName: productName,
        productId: productId,
        image: productImage,
        price: price,
        extras: extras,
        options: options,
    };
    let i = 1;

    // We add it as much as quantity wanted
    while(i <= quantity) {
      this.cart.items.push(item);

      // We increment the cart total price
      this.cart.totalPrice += item.price;

      // increment for loop
      i++;
    }
  }


  /*
  * Used to present the cart details page
  */
  async goToCart() {
    const modal = await this.modalController.create({
      component: CartPage
    });
    return await modal.present();
  }

}
