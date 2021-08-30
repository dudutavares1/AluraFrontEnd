import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarbeariaComponent } from './barbearia/barbearia.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  { path: 'Barbearia', component: BarbeariaComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Rodape', component: RodapeComponent },
  { path: 'Contato', component: ContatoComponent },
  { path: 'Produtos', component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
