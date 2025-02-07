import {Component, OnInit} from '@angular/core';
import {StatusBar} from "@capacitor/status-bar";
import {App} from "@capacitor/app";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  private fullScreenInterval: any;

  constructor() {
    this.hideStatusBar();

    App.addListener('appStateChange', (state) => {
      if (state.isActive) {
        this.hideStatusBar();
      }
    });
  }

  ngOnInit() {
    this.hideStatusBar();

    // Vérifier et appliquer le plein écran toutes les secondes
    this.fullScreenInterval = setInterval(() => {
      this.hideStatusBar();
    }, 1000);
  }

  async hideStatusBar() {
    try {
      await StatusBar.hide();
      document.body.style.setProperty('--ion-safe-area-top', '0px');
    } catch (error) {
      console.error("Erreur lors de la désactivation de la barre d'état", error);
    }
  }
}
