import { Component, Input } from '@angular/core';
import { Beer } from '../clases/beer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  cards: Beer[] = [];
  constructor(){

    for (let index = 0; index < 4; index++) {
      if(index === 0){
        const beer = new Beer();
        beer.index = index;
        beer.nombre = "IPA";
        beer.subtittulo = 'Graduación alcohólica y la presencia de lúpulo.';
        beer.detalle =  `En esencia, dos son los caracteres significativos de este tipo de cerveza:
         la graduación alcohólica y la presencia de lúpulo.`;
        beer.imagen = "/assets/ipa.jpg";
        this.cards.push(beer);

          

      }
      if(index === 1){
        const beer = new Beer();
        beer.index = index;

        beer.nombre = "ALE";
        beer.subtittulo = 'Graduación alcohólica y la presencia de lúpulo.';
        beer.detalle =  `En esencia, dos son los caracteres significativos de este tipo de cerveza:
         la graduación alcohólica y la presencia de lúpulo.`;
        beer.imagen = "/assets/ale.jpg";
        this.cards.push(beer);
    }
    if(index === 2){
      const beer = new Beer();
      beer.index = index;

      beer.nombre = "SCOTISH";
      beer.subtittulo = 'Graduación alcohólica y la presencia de lúpulo.';
      beer.detalle =  `En esencia, dos son los caracteres significativos de este tipo de cerveza:
       la graduación alcohólica y la presencia de lúpulo.`;
      beer.imagen = "/assets/scotish.jpg";
      this.cards.push(beer);
  }
  }
}
}