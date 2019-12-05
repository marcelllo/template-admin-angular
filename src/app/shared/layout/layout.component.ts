import { Component, OnInit } from '@angular/core';

import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  providers: [LayoutService],
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  exibir = true;
  largura = 300;
  itensMenu = [];

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.getItensMenu().subscribe(itens => this.itensMenu = itens);
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
    setTimeout(() => this.layoutService.menuMudou.next(true), 900);
  }

  menuSelecionado(link: string) {
    return false;
  }

}
