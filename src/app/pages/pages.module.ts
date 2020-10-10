import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HighchartsChartModule } from 'highcharts-angular';

import { CreditCardListComponent } from './credit-card/credit-card-list/credit-card-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { CreditCardComponent } from './credit-card/credit-card/credit-card.component';
import { EntriesComponent } from './bank-account/entries/entries.component';
import { MonthEntriesComponent } from './bank-account/month-entries/month-entries.component';

@NgModule({
  declarations: [
    CreditCardListComponent,
    DashboardComponent,
    LoginComponent,
    CreditCardComponent,
    EntriesComponent,
    MonthEntriesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule,
  ],
  exports: [
    CreditCardListComponent,
    DashboardComponent,
    LoginComponent
  ]
})
export class PagesModule { }
