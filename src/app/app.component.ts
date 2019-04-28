import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import {firebase} from '@firebase/app';
import { NotificationService } from './services/notification.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{

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
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
    private notificationsService:NotificationService
  ) {
    this.initializeApp();
  }
  async ngOnInit() {

  }
  async ngAfterViewInit() {
    this.platform.ready().then(async () => {
      firebase.initializeApp(environment.firebase);  
      await this.notificationsService.init();
      await this.notificationsService.requestPermission();
   });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  closeMenu(){
    this.menuController.close();

  }
  
}
