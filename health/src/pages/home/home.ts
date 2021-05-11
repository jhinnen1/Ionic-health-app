import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

removeItem(item) {
  console.log("Removing Item - ", item);
  const toast = this.toastCtrl.create({
    message: 'Removing Item - ' + item + " ...",
    duration: 3000
  });
  toast.present();
}

}
