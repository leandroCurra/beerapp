import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LottieAnimationViewModule } from 'ng-lottie';
import { PromoComponent } from './promo/promo.component';
import { SlidePromoComponent } from './promo/slide-promo/slide-promo.component';



@NgModule({
  declarations: [AppComponent, PromoComponent,SlidePromoComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({mode: 'ios'}),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],
  exports:[],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
