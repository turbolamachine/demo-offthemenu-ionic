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

  private specials: any[] = [];
  private products: any[] = [];
  private slideOpts: any;
  private specialsCategoryId: string = "1rXia7CeevroJzUU4pxK";

  constructor(public order: OrderService, public prodServ: ProductsService, public modalController: ModalController, private env: EnvService) {
    // We retrieve products from specific category
    let specSubscription = this.prodServ.fetchProductsByCategory(this.specialsCategoryId).subscribe(products => {
      this.specials = products;
    });

    // We retrieve the other products from other categories
    let catSubscription = this.prodServ.fetchAllCategories().subscribe(categories => {
      for(let category of categories) {
        if(category.id != this.specialsCategoryId) { // we don't want duplicates
          let prodSubscription = this.prodServ.fetchFirstProductByCategory(category.id).subscribe(products => {
            console.log(products);
            this.products.push(products[0]);
          });
        }
      }
    });

    // options for slides
    this.slideOpts = {
     initialSlide: 0,
     slidesPerView: 1,
     autoplay:true
    };
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


  /*
  * Action when "Cart" button is clicked
  */
  async clickOnCart(product) {
    return this.order.goToCart();
  }

}
