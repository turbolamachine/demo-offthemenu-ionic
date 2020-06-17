import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnvService } from '../services/env.service';
import { OrderService } from '../services/order.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductPage } from '../product/product.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private pizzas: any[] = [];

  constructor(public prodServ: ProductsService, public modalController: ModalController, public order: OrderService, private env: EnvService) {
    // We retrieve products from specific category
    let specSubscription = this.prodServ.fetchProductsByCategory("1rXia7CeevroJzUU4pxK").subscribe(products => {
      this.pizzas = products;
    });
  }

  ngOnInit() {
  }


  /*
  * Action when "Order now" buttons are clicked
  */
  async clickOnOrderNow(product) {
    // Open modal page product infos
    const modal = await this.modalController.create({
      component: ProductPage,
      componentProps: {
         product: product
      }
    });
    return await modal.present();
  }

}
