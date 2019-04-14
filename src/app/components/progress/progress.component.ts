import { Component, OnInit, Input } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  @Input('progress') progress:number;
  @Input() alcohol: boolean;
  public progreso = 0;
  progresoAlc = 0;

  unregisterBackAction:Subscription;

  constructor( private platform: Platform, private modalController:ModalController) { }

  ngOnInit() {
    const event = fromEvent(document, 'backbutton');
    this.unregisterBackAction = event.subscribe(async () => {
        const modal = await this.modalController
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        .getTop();
        if (modal) {
            modal.dismiss();
        }
    });

    setTimeout(async () => {
    for (let index = 0; index <= this.progress; index++) {
        this.progreso = await this.incrementar(index)

      
    }  
if(this.alcohol  ){
  const decimal =  this.progress - this.progreso;
  this.progresoAlc = this.progreso + decimal;
  console.log(this.progresoAlc)
}
    }, 1000);
  }


  public incrementar(index):Promise<number> {
    return new Promise( (resolve) =>{
      setTimeout(() => {
        resolve( index )
      }, 20);
    } )

  }

}
