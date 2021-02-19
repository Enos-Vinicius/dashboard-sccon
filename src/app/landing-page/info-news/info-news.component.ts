import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-news',
  templateUrl: './info-news.component.html',
  styleUrls: ['./info-news.component.scss']
})
export class InfoNewsComponent implements OnInit {

  arrNews = [
    {title: "Polícia Federal combate crimes ambientais em assentamentos do INCRA no Acre", description: "Batizada de Handroanthus GLO, ação reteve 131,1 mil metros cúbicos de toras extraídas no oeste do Pará", origin: "GOV.BR"},
    {title: "Operação da PF faz a maior apreensão de madeira da história", description: "Batizada de Handroanthus GLO, ação reteve 131,1 mil metros cúbicos de toras extraídas no oeste do Pará", origin: "FOLHA DE S.PAULO"},
    {title: "Ministério da Justiça e Segurança Pública institui Programa Brasil MAIS como um dos projetos estratégicos da Pasta", description: "Medida aplica geotecnologia em apoio às funções de segurança pública com finalidade e objetivos relacionados ao MJSP", origin: "GOV.BR"},
    {title: "Polícia Federal combate crimes ambientais em assentamentos do INCRA no Acre", description: "Batizada de Handroanthus GLO, ação reteve 131,1 mil metros cúbicos de toras extraídas no oeste do Pará", origin: "GOV.BR"},
    {title: "Operação da PF faz a maior apreensão de madeira da história", description: "Batizada de Handroanthus GLO, ação reteve 131,1 mil metros cúbicos de toras extraídas no oeste do Pará", origin: "FOLHA DE S.PAULO"},
    {title: "Ministério da Justiça e Segurança Pública institui Programa Brasil MAIS como um dos projetos estratégicos da Pasta", description: "Medida aplica geotecnologia em apoio às funções de segurança pública com finalidade e objetivos relacionados ao MJSP", origin: "GOV.BR"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
