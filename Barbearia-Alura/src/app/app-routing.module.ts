import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarbeariaComponent } from './barbearia/barbearia.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: 'acao', component: BarbeariaComponent },
  { path: 'acao', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
