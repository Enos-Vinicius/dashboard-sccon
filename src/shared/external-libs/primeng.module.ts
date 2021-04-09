import { NgModule }      from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { StepsModule } from 'primeng/steps';
import { RippleModule } from 'primeng/ripple';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  imports: [
    CarouselModule,
    ButtonModule,
    ToastModule,
    CardModule,
    SplitterModule,
    TabViewModule,
    TimelineModule,
    AccordionModule,
    RippleModule,
    ProgressSpinnerModule,
    StepsModule
  ],
  exports: [ 
    CarouselModule,
    ButtonModule,
    ToastModule,
    CardModule,
    SplitterModule,
    TabViewModule,
    TimelineModule,
    AccordionModule,
    RippleModule,
    ProgressSpinnerModule,
    StepsModule
   ],

})

export class PrimeNgModule { }
