import { Component, OnInit, Input } from '@angular/core';
import { Promo } from 'src/app/clases/promo';

@Component({
  selector: 'app-slide-promo',
  templateUrl: './slide-promo.component.html',
  styleUrls: ['./slide-promo.component.scss'],
})
export class SlidePromoComponent implements OnInit {
@Input() promo: Promo;
  constructor() { }

  ngOnInit() {
    console.log( this.promo)
  }

}
