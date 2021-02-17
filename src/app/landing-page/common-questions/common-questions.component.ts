import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-questions',
  templateUrl: './common-questions.component.html',
  styleUrls: ['./common-questions.component.scss']
})
export class CommonQuestionsComponent implements OnInit {

  arrQuestions = [
    {question: "1 - Quem pode ter acesso às imagens e mosaicos Planet e demais produtos do contrato nº 018/2020 vinculado ao Programa Brasil M.A.I.S.?", response: "Resposta Resposta Resposta"},
    {question: "2 -  Eu já sou um usuário cadastrado na Plataforma Web e consigo visualizar as imagens e mosaicos Planet, porém não consigo realizar o download das imagens. Como devo proceder para ter a permissão de download das imagens?", response: "Resposta Resposta Resposta"},
    {question: "3 -  Como posso ter acesso ao Dashboard para visualizar os alertas de detecção de mudanças?", response: "Resposta Resposta Resposta"},
    {question: " 4 - Não consigo realizar o acesso à Plataforma Web com meu usuário e senha. Como faço para recuperar minha senha?", response: "Resposta Resposta Resposta"},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
