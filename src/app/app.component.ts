import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Beer Code',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Promociones',
      url: '/promo',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
    private swPush: SwPush,
    //  private newsletterService: NewsletterService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.subscribeToNotifications();

    });
  }

  closeMenu(){
    this.menuController.close();

  }
  subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: 'BONnElNhG-VfQosf8dPqW50P9B8xI-MEG7EcPinEk61Yz1xlXD9VWuTlDVAspcrW5-tHDnLIGkSSwOMpPO8mB5M'
    })
    .then(sub =>{ console.log(sub)})
    .catch(err => console.error("Could not subscribe to notifications", err));
}
}

