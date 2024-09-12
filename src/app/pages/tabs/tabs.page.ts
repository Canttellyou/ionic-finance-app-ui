import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import {
  home,
  homeOutline,
  pieChart,
  pieChartOutline,
  card,
  cardOutline,
  settings,
  settingsOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  home,
  'home-outline': homeOutline,
  'pie-chart': pieChart,
  'pie-chart-outline': pieChartOutline,
  card,
  'card-outline': cardOutline,
  settings,
  'settings-outline': settingsOutline,
});

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class TabsPage {
  selectedTab: any;

  @ViewChild('tabs', { static: false }) tabs!: IonTabs;

  constructor() {}

  // ngOnInit() {}

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }
}
