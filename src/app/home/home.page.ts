import { Component } from '@angular/core';
import { AlertController, IonDatetime } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  public myDateOfBirth: String;
  ionViewDidEnter() {
    this.myDateOfBirth = "01-19-1999";
  }

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Contact Details',
      subHeader: '',
      message: 'Email: nick.brinkmann4@gmail.com',
      buttons: ['Close.']
    });

    await alert.present();
  }

  pressMe() {
    alert("Hi!!!");
  }

}

