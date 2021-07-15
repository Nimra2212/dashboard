import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  cards = [];
  constructor() {}
  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      this.cards.push(i);
    }
  }
}
