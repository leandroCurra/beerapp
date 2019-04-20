import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { PreviewComponent } from '../preview/preview.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { BeerModalComponent } from '../components/beer-modal/beer-modal.component';
import { FichaComponent } from '../components/ficha/ficha.component';
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
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage, PreviewComponent],
  entryComponents: [BeerModalComponent],

})
export class ListPageModule {}
