import { Beer } from 'src/app/clases/beer';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { SLIDER_CONST } from 'src/app/constantes/slider/slider-const'
@Component({
  selector: 'app-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.scss'],
})
export class BeerModalComponent implements OnInit {
  @Input() value: Beer;
  @ViewChild('slide') slider: IonSlides;
  public CONST_SLIDER = SLIDER_CONST;
  public slecttedIndex = 0;


  slideOpts = {
    effect: 'flip'
  };
  

  constructor(private modalController:ModalController) { 
    
  }

  ngOnInit() {
    console.log( this.CONST_SLIDER );
 
  }
 async change(event) {
 let index =  await this.slider.getActiveIndex()
 this.slecttedIndex = index
  }


changeSlide(slide_index){
  this.slider.slideTo(slide_index);

}

close(){
  this.modalController.dismiss();
}
}
