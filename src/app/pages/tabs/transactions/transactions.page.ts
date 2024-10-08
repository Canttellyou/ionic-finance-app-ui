import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItemGroup,
  IonItem,
  IonText,
  IonThumbnail,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonText,
    IonItem,
    IonItemGroup,
    IonLabel,
    IonSegmentButton,
    IonSegment,
    IonContent,
    IonHeader,
    IonTitle,
    IonThumbnail,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class TransactionsPage implements OnInit {
  allTransactions: any[] = [];
  transactions: any[] = [];
  segmentValue: string = 'in';

  constructor() {}

  ngOnInit() {
    this.allTransactions = [
      { id: 1, to: 'Piyush Ag.', date: '2022-05-22', amount: 5000 },
      { id: 2, to: 'Avinash', date: '2022-03-02', amount: 7000 },
      { id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
      { id: 4, to: 'Anim Jason Akbar', date: '2022-01-09', amount: 1000 },
      { id: 5, to: 'Prem Ag', date: '2022-04-13', amount: -800 },
    ];

    this.filterTransactions();
  }

  filterTransactions() {
    if (this.segmentValue === 'in') {
      this.transactions = this.allTransactions.filter((x) => x.amount >= 0);
    } else {
      this.transactions = this.allTransactions.filter((x) => x.amount < 0);
    }
  }

  segmentChanged(event: any) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }
}
