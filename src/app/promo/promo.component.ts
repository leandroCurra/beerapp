import { Component, OnInit } from '@angular/core';
import { Promo } from '../clases/promo';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
})
export class PromoComponent implements OnInit {
  public promos: Promo[] = [];
  public promo:Promo;
  public promo1:Promo;
  public promo2:Promo;

  constructor( private menuController: MenuController) { 
    this.promo = new Promo('! 20% de Descuento ¡', 'hasta las 1:00','../../../assets/promo.jpg', ' #fbaa1b', '#3b2124');
    this.promo1 = new Promo('! HAPPY HOUR!', 'compras una te reagalamos una','../../../assets/promo2.jpg', ' #000000','white');
    this.promo2 = new Promo('! OKTOBER FEST !', '','../../../assets/promo3.jpg', '#d92026','white');
     
    this.promos.push(this.promo);
    this.promos.push(this.promo1);
    this.promos.push(this.promo2)
  }

  ngOnInit() {}


  toogleMenu(){
    this.menuController.toggle()
  }

}
