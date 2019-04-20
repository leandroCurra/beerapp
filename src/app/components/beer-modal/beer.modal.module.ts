import { NgModule } from '@angular/core';
import { BeerModalComponent } from './beer-modal.component';
import { CardComponent } from '../card/card.component';
import { FichaComponent } from '../ficha/ficha.component';
import { ProgressComponent } from '../progress/progress.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      BeerModalComponent,FichaComponent,ProgressComponent
  ],
  imports: [
    IonicModule,CommonModule,


  ],
  exports: [
    BeerModalComponent,FichaComponent,ProgressComponent
]
})
export class BeerModalModule {}