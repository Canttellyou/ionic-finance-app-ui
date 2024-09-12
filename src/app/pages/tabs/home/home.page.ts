import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonText,
  IonAvatar,
  IonicSlides,
} from '@ionic/angular/standalone';

import { SwiperOptions } from 'swiper/types';
import { addIcons } from 'ionicons';
import { addCircle, card, newspaper, paperPlane, send } from 'ionicons/icons';

addIcons({
  'paper-plane': paperPlane,
  send,
  newspaper,
  'add-circle': addCircle,
  card,
});

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonText,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  bannerConfig!: SwiperOptions;

  featureConfig!: SwiperOptions;

  accounts = [
    { id: 1, acc_no: '57868945098', balance: '200000' },
    { id: 2, acc_no: '20067091201', balance: '50000' },
    { id: 3, acc_no: '40163081205', balance: '80000' },
  ];

  features = [
    { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
    { id: 2, color: 'white', icon: 'send', name: 'Request' },
    { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
    { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
    { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
  ];

  transactions = [
    { id: 1, to: 'Jason Akbar', date: '2022-05-22', amount: 5000 },
    { id: 2, to: 'Emily G. Mitchell', date: '2022-03-02', amount: 7000 },
    { id: 3, to: 'James A. Turner', date: '2022-07-28', amount: -3250 },
    { id: 4, to: 'Sophia R. Anderson', date: '2022-01-09', amount: 1000 },
    { id: 5, to: 'Prem Ag.', date: '2022-04-13', amount: -800 },
  ];

  swiperModules = [IonicSlides];

  constructor() {}
}
