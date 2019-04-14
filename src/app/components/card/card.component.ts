import { BeerModalComponent } from './../beer-modal/beer-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/clases/beer';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public showAnimation: boolean = false;

@Input() beer: Beer;
  constructor(private modalController:ModalController) { }

  async ngOnInit() {
  }


  
  public presentBeerModal() {
    this.showAnimation = true;
    setTimeout(() => {
        this.showModal();
        setTimeout(() => {
this.showAnimation = false;  
      }, 500 );
    }, 400);
  }

  private async showModal(){
        const modal = await this.modalController.create({
      component: BeerModalComponent,
      componentProps: { value: this.beer }
    });


    return await modal.present();
  }


}
