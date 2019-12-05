import { Injectable } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';

@Injectable()
export class LayoutService {
  public menuMudou = new Subject<boolean>();

  getItensMenu(): Observable<any[]> {
    return of([{
      texto: 'Home',
      link: '/'
    }, {
      texto: 'Cartão de Crédito',
      link: 'cartao-credito'
    }, {
      texto: 'Lançamentos Mês',
      link: 'lancamentos'
    }]);
  }
}
