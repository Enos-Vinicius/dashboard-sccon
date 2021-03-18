import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-image-mosaics',
  templateUrl: './info-image-mosaics.component.html',
  styleUrls: ['./info-image-mosaics.component.scss']
})
export class InfoImagesMosaicsComponent implements OnInit {

  arrImage = [
    {order: "1", order_img: "2", title: "imagens diárias e mosaícos planet", description: "Batizada de Handroanthus GLO, ação reteve 131,1 mil metros cúbicos de toras extraídas no oeste do Pará" },
    {order: "2", order_img: "1", title: "lorem ipsum dolor sit amet", description: "Batizada de Handroanthus GLO, ação reteve 131,1 mil metros cúbicos de toras extraídas no oeste do Pará"},
    {order: "1", order_img: "2", title: "lorem ipsum dolor sit amet", description: "Batizada de Handroanthus GLO, ação reteve 131,1 mil metros cúbicos de toras extraídas no oeste do Pará"},
    {order: "2", order_img: "1", title: "lorem ipsum dolor sit amet", description: "Medida aplica geotecnologia em apoio às funções de segurança pública com finalidade e objetivos relacionados ao MJSP"},
    {order: "1", order_img: "2", title: "lorem ipsum dolor sit amet", description: "Medida aplica geotecnologia em apoio às funções de segurança pública com finalidade e objetivos relacionados ao MJSP"},
    {order: "2", order_img: "1", title: "imagens diárias e mosaícos planet", description: "Batizada de Handroanthus GLO, ação reteve 131,1 mil metros cúbicos de toras extraídas no oeste do Pará"},
  ]

  widthScreen: number;

  constructor(
    public authService : AuthService
  ) { }

  ngOnInit(): void {
    this.widthScreen = window?.screen?.width;
  }

}
