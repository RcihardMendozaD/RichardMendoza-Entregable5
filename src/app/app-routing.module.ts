import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListarPelisComponent } from './app-listar-pelis/app-listar-pelis.component';
import { AppVerCarritoComponent } from './app-ver-carrito/app-ver-carrito.component';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  {path:'*',component:AppHomeComponent},
  {path:'home',component:AppHomeComponent},
  {path:'listaPeliculas',component:AppListarPelisComponent},
  {path:'verCarrito',component:AppVerCarritoComponent},
  {path:'verCarrito/:id',component:AppVerCarritoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }