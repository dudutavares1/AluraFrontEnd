import { Component, OnInit } from '@angular/core';

import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards: string[] = [];

  cardsService: CardsService;

  constructor() {
    this.cardsService = new CardsService();
  }

  ngOnInit() {
    this.cards = this.cardsService.getCards();
  }
}
