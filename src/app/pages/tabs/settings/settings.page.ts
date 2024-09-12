import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonItem,
  IonToggle,
  IonButton,
  IonAvatar,
  IonList,
} from '@ionic/angular/standalone';
import {
  notificationsOutline,
  fingerPrintOutline,
  keyOutline,
  helpBuoyOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  'notifications-outline': notificationsOutline,
  'key-outline': keyOutline,
  'finger-print-outline': fingerPrintOutline,
  'help-buoy-outline': helpBuoyOutline,
});

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonAvatar,
    IonButton,
    IonToggle,
    IonItem,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonIcon,
  ],
})
export class SettingsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
