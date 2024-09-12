import {
  AfterContentChecked,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonicSlides,
} from '@ionic/angular/standalone';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardPage implements OnInit, AfterContentChecked {
  bannerConfig!: SwiperOptions;

  cards = [
    {
      id: 1,
      company_img: 'assets/images/mastercard.png',
      card_no: '5786 8945 9098 1100',
      card_holder: 'Emily G. Mitchell',
      exp_date: '08/24',
    },
    {
      id: 2,
      company_img: 'assets/images/visa.png',
      card_no: '2006 7091 2014 8766',
      card_holder: 'James A. Turner',
      exp_date: '11/29',
    },
    {
      id: 3,
      company_img: 'assets/images/mastercard.png',
      card_no: '4016 3081 2056 7890',
      card_holder: 'Sophia R. Anderson',
      exp_date: '06/25',
    },
  ];

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
      pagination: { clickable: true },
    };
  }

  swiperModules = [IonicSlides];

  constructor() {}

  ngOnInit() {}
}
