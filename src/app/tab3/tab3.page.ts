import { Component } from '@angular/core';
import {LocalNotifications} from "@capacitor/local-notifications";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor() {}

  async sendNotification() {

    const permission = await LocalNotifications.requestPermissions();
    console.log("Permission:", permission);

    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Important',
          body: 'Ceci est une notification locale 🎉',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000) }, // 1 seconde plus tard
          sound: 'default',
          //attachments: null,
          actionTypeId: '',
          extra: null
        }
      ]
    });
  }
}
