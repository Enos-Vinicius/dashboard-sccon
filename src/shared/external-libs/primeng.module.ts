import { NgModule }      from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';

@NgModule({
  imports: [
    CarouselModule,
    ButtonModule,
    ToastModule,
    CardModule,
    SplitterModule,
    AccordionModule 
  ],
  exports: [ 
    CarouselModule,
    ButtonModule,
    ToastModule,
    CardModule,
    SplitterModule,
    AccordionModule
   ],

})

export class PrimeNgModule { }
