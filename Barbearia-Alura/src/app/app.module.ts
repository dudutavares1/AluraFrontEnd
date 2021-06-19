import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarbeariaComponent } from './barbearia/barbearia.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutosComponent } from './produtos/produtos.component';


@NgModule({
  declarations: [				
    AppComponent,
      BarbeariaComponent,
      MenuComponent,
      RodapeComponent,
      ContatoComponent,
      ProdutosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
