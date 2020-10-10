import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-entries',
  templateUrl: './month-entries.component.html',
  styleUrls: ['./month-entries.component.scss']
})
export class MonthEntriesComponent implements OnInit {

  atualDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
