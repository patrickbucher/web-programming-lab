import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-beer',
    templateUrl: './beer.page.html',
    styleUrls: ['./beer.page.scss'],
})
export class BeerPage implements OnInit {

    constructor(public alertController: AlertController) {}

    ngOnInit() {
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alarm!',
            subHeader: 'Ala-arm!',
            message: 'Sie dürfen hier keine Uniform klauen!',
            buttons: ['Na gut...']
        });

        await alert.present();
    }

    onBierClick() {
        this.presentAlert();
    }

}
