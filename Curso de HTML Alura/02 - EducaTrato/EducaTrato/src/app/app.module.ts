import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TituloComponent } from './/titulo/titulo.component';
import { CardsComponent } from './cards/cards.component';
import { CompartilheComponent } from './/compartilhe/compartilhe.component';


@NgModule({
  declarations: [
    AppComponent,
      LogoComponent,
      TituloComponent,
      CardsComponent,
      CompartilheComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
