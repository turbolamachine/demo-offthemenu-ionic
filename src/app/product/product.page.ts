import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from 'src/app/models/category';
import { Checkbox } from 'src/app/models/checkbox';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  public product: any;
  public category: Category;
  public quantity: number = 0;
  public tabOptions: Checkbox[] = [];
  public tabExtras: Checkbox[] = [];

  constructor(public alertCtrl: AlertController, public order: OrderService, private navCtrl: NavController, public db: AngularFirestore, public modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    // We retrieve specific product passed in parameters
    this.product = this.navParams.get('product');

    // We need category infos
    const promise = this.db.doc<Category>('categories/'+this.product.categorie_id).valueChanges().subscribe((resp) => {
      this.category = resp;
    });

    // Init options
    for(let opt of this.product.options) {
      this.tabOptions.push({
        label: opt,
        value: true
      });
    }

    // Init extras
    for(let ext of this.product.extras) {
      this.tabExtras.push({
        label: ext,
        value: false
      });
    }
  }


  /*
  * Action when "Close" button is clicked
  */
  clickOnClose(){
    this.modalController.dismiss();
  }


  /*
  * Action when "Category" badge is clicked
  */
  clickOnCategory(){
    this.modalController.dismiss();
    this.navCtrl.navigateRoot('/category-list/'+this.product.categorie_id);
  }


  /*
  * Action when "Plus" button is clicked
  */
  clickOnPlusButton(){
    this.quantity++;
  }


  /*
  * Action when "Minus" button is clicked
  */
  clickOnMinusButton(){
    if(this.quantity > 0) {
      this.quantity--;
    }
  }


  /*
  * Action when "Order" button is clicked
  */
  clickOnOrderButton(){
    if(this.quantity > 0) {
      this.order.addToCart(this.product.name, this.product.id, this.product.image, this.product.price, this.category.price_extras, this.quantity, this.tabOptions, this.tabExtras);
      this.presentAlertOK();
    }
    else {
      this.presentAlertNoQty();
    }
  }


  /*
  * Alert is presented when quantity is less than 1
  */
  async presentAlertNoQty() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Your quantity must be greater than 0 in order to add to cart.',
      buttons: ['OK']
    });

    await alert.present();
  }


  /*
  * Alert is presented when order is completed
  */
  async presentAlertOK() {
    console.log(this.order.cart);
    const alert = await this.alertCtrl.create({
      header: 'OK !',
      message: 'You have added '+this.quantity+' times this item into your cart !',
      buttons: [
        {
          text: 'Order again',
          role: 'cancel',
          cssClass: 'medium'
        }, {
          text: 'Order something else',
          cssClass: 'secondary',
          handler: () => {
            this.modalController.dismiss();
          }
        }, {
          text: 'Go to cart',
          cssClass: 'success',
          handler: () => {
            this.modalController.dismiss();
            this.order.goToCart();
          }
        }
      ]
    });

    await alert.present();
  }

}
