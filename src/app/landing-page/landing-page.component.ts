import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { ModalCommonComponent } from './../../shared/components/modal-common/modal-common.component';
import { AuthService } from './../../shared/services/auth.service';
import { Helper } from './../../shared/utils/Helper';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private modalRef;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['token']) {

        let title = "Por favor aguarde, o sistema está se autenticando no sistema da Sinesp...";
        let content = `<div class="text-center">
          <img width='170px' src='assets/imgs/marca-sinesp-pro.png'>
        </div>`;

        this.openModal(title, content, true);

        this.authService.doLoginSinesp(params['token']).then(sucess => {

          this.modalRef.close();

        }).catch(error => {

          this.modalRef.close();

          let organizationName = ((error.data || {}).message || "").replace(/.*\[([^\]]+)] not.*/, "$1");

          if (error['status'] != 401) {
            title = 'Erro Desconhecido'
            content = "Ocorreu um erro ao logar. Por favor, tente novamente.";
          } else {
            title = '<b>Instituição Não Habilitada</b>'
            content = '<p class="lineModal"><b>Sua instituição não está habilitada para acesso à Plataforma Web.</b></p>' +
              '<br/>' +
              '<p class="lineModal"><b>Instituição:</b> ' + organizationName + '</p>' +
              '<br/>' +
              '<p class="lineModal"><b>Caso tenha interesse em acessar, por favor, informe ao dirigente máximo da sua instituição para que solicite a habilitação:</b></p>' +
              '<br/>' +
              '<p class="lineModal"><b>a) No caso de instituição de segurança pública estadual, distrital ou municipal, com a Secretaria Nacional de Segurança Pública - Senasp, solicitando o acesso, através do seguinte contato:</b></p>' +
              '<p class="lineModal"><b>Responsável:</b> Agrício da Silva</p>' +
              '<p class="lineModal"><b>Cargo:</b> Chefe de gabinete da Senasp</p>' +
              '<p class="lineModal"><b>Endereço:</b> Esplanada dos Ministérios, Palácio da Justiça, Bloco T, Edifício Sede, 5º Andar, Sala 522. Brasília/DF - CEP: 70.064-900</p>' +
              '<p class="lineModal"><b>Telefone:</b> (61) 2025-3780 / (61) 2025-9169</p>' +
              '<p class="lineModal"><b>E-mail:</b> <a href=\'mailto:agricio.silva@mj.gov.br\'>agricio.silva@mj.gov.br</a></p>' +
              '<br/>' +
              '<p class="lineModal"><b>b) Para as demais instituições públicas federais, estaduais, distritais e municipais, com a Secretaria-Executiva do Ministério da Justiça e Segurança Pública, solicitando o acesso, através do seguinte contato:</b></p>' +
              '<p class="lineModal"><b>Responsável:</b> Washington Leonardo Guanaes Bonini</p>' +
              '<p class="lineModal"><b>Cargo:</b> Secretário-Executivo adjunto</p>' +
              '<p class="lineModal"><b>Endereço:</b> Esplanada dos Ministérios, Bloco T, Edifício Sede. Brasília/DF. CEP: 70.064-900</p>' +
              '<p class="lineModal"><b>Telefone:</b> (61) 2025-2169/ (61) 2025-7982/ (61) 2025-3914</p>' +
              '<p class="lineModal"><b>E-mail:</b> <a href=\'mailto:agendase@mj.gov.br\'>agendase@mj.gov.br</a> / <a href=\'mailto:secretaria.executiva@mj.gov.br\'>secretaria.executiva@mj.gov.br</a></p>';
          }

          this.openModal(title, content);
        });
      }
    });
  }

  private openModal(title, content, loading = false) {
    this.modalRef = this.dialog.open(ModalCommonComponent, Helper.checkMobile() ? {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100vh',
      width: '100vw',
      data: {
        title: title,
        content: content,
        loading
      }
    } : {
      minWidth: '25vw',
      maxHeight: '90vh',
      data: {
        title: title,
        content: content,
        loading
      }
    },
    );
  }

}
