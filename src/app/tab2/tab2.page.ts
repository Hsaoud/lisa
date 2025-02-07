import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  conversations = [
    {
      id: 1,
      name: "Professeur Dupont",
      avatar: "assets/prof1.png",
      lastMessage: "Votre enfant a bien remis son devoir.",
      unread: 2
    },
    {
      id: 2,
      name: "Professeur Martin",
      avatar: "assets/prof2.png",
      lastMessage: "N'oubliez pas la réunion de demain.",
      unread: 1
    },
    {
      id: 3,
      name: "Directeur",
      avatar: "assets/director.png",
      lastMessage: "Rappel : vacances scolaires du 15 au 30 avril.",
      unread: 0
    }
  ];

  constructor(private router: Router) {}

  openChat(conversation: { id: any; }) {
    this.router.navigate(['/chat', conversation.id]);
  }

}
