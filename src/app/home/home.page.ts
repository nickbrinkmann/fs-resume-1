import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


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
      header: 'Oooops!',
      subHeader: 'You silly boy.',
      message: 'You have downloaded a virus!',
      buttons: ['I am such a silly boy.']
    });

    await alert.present();
  }

  pressMe() {
    alert("Hi!!!");
  }

}

