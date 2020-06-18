import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, AlertController } from '@ionic/angular';
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public order: OrderService, public modalController: ModalController) { }

  ngOnInit() {
  }


  /*
  * Action when "Close" button is clicked
  */
  clickOnClose(){
    this.modalController.dismiss();
  }

}
