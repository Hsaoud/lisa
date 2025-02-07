import {Component, OnInit} from '@angular/core';
import {LocalNotifications} from "@capacitor/local-notifications";
import {Device} from "@capacitor/device";

@Component({
  selector: 'app-parameters',
  templateUrl: 'parameters-page.component.html',
  styleUrls: ['parameters-page.scss'],
  standalone: false,
})
export class ParametersPage implements OnInit{
  deviceInfo: any = {};
  browserInfo: string = '';

  constructor() {}
  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
    this.browserInfo = this.getBrowserInfo();
  }

  getBrowserInfo(): string {
    const userAgent = navigator.userAgent;
    let browserName = "Inconnu";

    // Vérifier pour les navigateurs connus
    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "Safari";
    } else if (userAgent.match(/edge/i)) {
      browserName = "Edge";
    }

    return browserName;
  }
  async sendNotification() {

    const permission = await LocalNotifications.requestPermissions();
    console.log("Permission:", permission);

    await LocalNotifications.schedule({
      notifications: [
        {
          title: '💬 Nouveaux messages',
          body: 'Cliquez pour voir les nouveaux messages 💬',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000) }, // 1 seconde plus tard
          sound: 'default',
          actionTypeId: '',
          extra: null
        }
      ]
    });
  }
}
