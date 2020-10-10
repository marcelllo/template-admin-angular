import { Component, OnInit } from '@angular/core';

import { Card } from './../card';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  cards: Card[] = [
    {cardNumber: '5454855933451033', limit: 4500, balance: 1350, flag: 'Master'},
    {cardNumber: '0023456578798265', limit: 6800, balance: 50, flag: 'VISA'},
    {cardNumber: '1234123412347890', limit: 2750, balance: 1650, flag: 'VISA'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
