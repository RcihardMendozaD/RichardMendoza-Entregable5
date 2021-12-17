import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppListarPelisComponent } from './app-listar-pelis/app-listar-pelis.component';
import { AppVerCarritoComponent } from './app-ver-carrito/app-ver-carrito.component';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AppListarPelisComponent,
    AppVerCarritoComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
