import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { CalcularIMCComponent } from './calcular-imc/calcular-imc.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  {path: '', component: CalcularMediaComponent},
  {path: 'calcular-media', component: CalcularMediaComponent},
  {path: 'apolice-seguro', component: ApoliceSeguroComponent},
  {path: 'conversor-temperatura', component:ConversorTemperaturaComponent},
  {path: 'calcular-imc', component:CalcularIMCComponent},
  {path: '**',component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
