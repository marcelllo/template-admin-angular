import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';

import { CreditCardListComponent } from './pages/credit-card/credit-card-list/credit-card-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MonthEntriesComponent } from './pages/bank-account/month-entries/month-entries.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CreditCardComponent } from './pages/credit-card/credit-card/credit-card.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'credit-cards', component: CreditCardListComponent},
      {path: 'credit-card', component: CreditCardComponent},
      {path: 'credit-card/:id', component: CreditCardComponent},
      {path: 'month-entries', component: MonthEntriesComponent},
      {path: '**', redirectTo: 'dashboard'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
