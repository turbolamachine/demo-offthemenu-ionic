import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public mode: number = 0;

  constructor(public alertController: AlertController, public loadingController: LoadingController, public order: OrderService) {
  }

  ngOnInit() {
  }

  /*
  * Change delivery mode =====> 0 = none / 1 = home delivery / 2 = take away / 3 = dine in
  */
  changeMode(newMode) {
    this.mode = newMode;
  }


  /*
  * Action when "Confirm" button is clicked
  */
  async clickOnConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Do you want to complete your order ?',
      buttons: [
        {
          text: 'No, I forgot something',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes !',
          handler: () => {
            this.finish();
          }
        }
      ]
    });

    await alert.present();
  }


  /*
  * Action when user has confirmed
  */
  async finish(){
    /** !!! **
    ** CUSTOM CODE MUST BE HERE TO DEAL WITH THE ORDER (Form validation, Payment, etc...)
    ** Lines from 64 to 71 can be deleted
    ** !!! **/

    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.order.orderIsFinished();
  }

}
