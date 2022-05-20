import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ProductosComponent } from './paginas/productos/productos.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    NosotrosComponent,
    ContactoComponent,
    FormularioComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
