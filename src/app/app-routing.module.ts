//Sintaxis de las rutas
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ContactoComponent } from "./paginas/contacto/contacto.component";
import { FormularioComponent } from "./paginas/formulario/formulario.component";
import { NosotrosComponent } from "./paginas/nosotros/nosotros.component";
import { ProductosComponent } from "./paginas/productos/productos.component";

const routes: Routes = [
    { path: 'home', component: MainComponent}, //equivale a una ruta
    { path: 'nosotros', component:NosotrosComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'formulario', component: FormularioComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}, //cualquier cosa que tengamos que no tenga pagina como respuesta lo macheamos a la home
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true,scrollPositionRestoration: 'enabled'
    }), //www.ejemplo.com.ar/#/home
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule {};