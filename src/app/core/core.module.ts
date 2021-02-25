import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    NavbarModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserModule,
    NavbarModule,
    HttpClientModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
