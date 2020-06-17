import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  private product: any;

  constructor(public modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    // We retrieve specific product passed in parameters
    this.product = this.navParams.get('product');
    console.log(this.product);
  }


  /*
  * Action when "Close" button is clicked
  */
  clickOnClose(){
    this.modalController.dismiss();
  }

}
