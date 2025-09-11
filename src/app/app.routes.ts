import { Routes } from '@angular/router';
import { ArticulosListaComponent } from './components/articulos-lista/articulos-lista.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: "/articulos"},
    {path: 'articulos', component: ArticulosListaComponent},
    { path: 'articulos/:id', component: ArticuloDetalleComponent}
];
