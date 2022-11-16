import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LancamentoService } from '../lancamentos/lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos: any[] = [];

  constructor(private router: Router, private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  lancamentoNovo() {
    this.router.navigate(["/lancamentos/novo"]);
  }

  pesquisar(): void {
    this.lancamentoService.pesquisar()
      .then(lancamentos => this.lancamentos = lancamentos);
  }

}
