import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { CartPage } from '../cart/cart.page';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public cart: {
    totalPrice: number,
    items: CartItem[]
  };

  constructor(private toastController: ToastController, private navCtrl: NavController, public modalController: ModalController) {
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

      // We increment the order total price
      this.cart.totalPrice += item.price;

      // increment for loop
      i++;
    }
  }


  /*
  * Remove one product from cart
  */
  removeFromCart(uniqueId) {

    // We loop on all items
    for(let key in this.cart.items) {
      let item = this.cart.items[key];

      // If the id is equal, we remove item from tab
      if(item.id == uniqueId) {
        this.cart.items.splice(parseFloat(key), 1);
        break;
      }
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


  /*
  * Has to be called after order is completed and everything was OK
  */
  async orderIsFinished() {
    // cart is emptied
    this.cart = {
      totalPrice: 0,
      items: []
    };

    // redirect to home
    this.navCtrl.navigateRoot('/home');

    // toast popup
    const toast = await this.toastController.create({
      message: 'Your order is complete. Thank you !',
      duration: 3000
    });
    toast.present();

  }

}
