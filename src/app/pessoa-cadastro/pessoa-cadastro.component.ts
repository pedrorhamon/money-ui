import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  estados = [
    { label: 'Paraiba', value: 1 },
    { label: 'Pernabumco', value: 2 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
