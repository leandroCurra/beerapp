import { BeerModalComponent } from './../components/beer-modal/beer-modal.component';
import { CardComponent } from '../components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FichaComponent } from '../components/ficha/ficha.component'
import { HomePage } from './home.page';
import { ProgressComponent } from '../components/progress/progress.component';
import { BeerModalModule } from '../components/beer-modal/beer.modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeerModalModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, CardComponent],
  exports: [ ],
  entryComponents: [BeerModalComponent],


})
export class HomePageModule {}
