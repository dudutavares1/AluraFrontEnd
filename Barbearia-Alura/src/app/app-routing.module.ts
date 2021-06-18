import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarbeariaComponent } from './/Barbearia/Barbearia.component';
import { ProdutosComponent } from './/produtos/produtos.component';

const routes: Routes = [
  { path: 'acao', component: BarbeariaComponent },
  { path: 'acao', component: ProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
