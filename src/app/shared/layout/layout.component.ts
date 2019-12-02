import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  exibir = true;
  largura = 300;
  itensMenu = [{
    texto: 'Home',
    link: '/'
  }, {
    texto: 'Cartão de Crédito',
    link: 'cartao-credito'
  }, {
    texto: 'Lançamentos Mês',
    link: 'lancamentos'
  }];

  ngOnInit() {
    let menu = { exibir: this.exibir };
    const config = localStorage.getItem('teste-menu');
    if (config) {
      menu = JSON.parse(config);
    }
    this.exibir = menu.exibir;
  }

  showHideMenu() {
    this.exibir = !this.exibir;
    const menu = { exibir: this.exibir };
    localStorage.setItem('teste-menu', JSON.stringify(menu));
  }

  menuSelecionado(link: string) {
    return false;
  }

}
