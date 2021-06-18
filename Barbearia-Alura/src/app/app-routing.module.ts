import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarbeariaComponent } from './/Barbearia/Barbearia.component';

const routes: Routes = [
  { path: 'acao', component: BarbeariaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
