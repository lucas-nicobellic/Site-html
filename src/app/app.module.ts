import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { FormsModule } from '@angular/forms';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { FooterComponent } from './footer/footer.component';
import { BaseUIComponent } from './base-ui/base-ui.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { CalcularIMCComponent } from './calcular-imc/calcular-imc.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    CalcularMediaComponent,
    ApoliceSeguroComponent,
    FooterComponent,
    BaseUIComponent,
    ConversorTemperaturaComponent,
    CalcularIMCComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
