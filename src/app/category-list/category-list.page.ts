import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from 'src/app/models/category';
import { OrderService } from '../services/order.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductPage } from '../product/product.page';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  private category: Category;
  private products: any[];

  constructor(public modalController: ModalController, public prodServ: ProductsService, public order: OrderService, public db: AngularFirestore, private activatedRoute: ActivatedRoute) {
    // We retrieve the category and its products
    let myId = this.activatedRoute.snapshot.paramMap.get('myid');
    const promise = db.doc<Category>('categories/'+myId).valueChanges().subscribe((resp) => {
      this.category = resp;
    });

    // We retrieve products from specific category
    const promise2 = this.prodServ.fetchProductsByCategory(myId).subscribe(products => {
      this.products = products;
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
