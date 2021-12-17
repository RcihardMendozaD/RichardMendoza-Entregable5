import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-app-listar-pelis',
  templateUrl: './app-listar-pelis.component.html',
  styleUrls: ['./app-listar-pelis.component.css']
})
export class AppListarPelisComponent implements OnInit,OnDestroy,AfterContentInit {
  readonly root_utl = "https://61b9300238f69a0017ce5f02.mockapi.io/";
  pelis:any;
  cargarLista:boolean = true;

  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
    this.pelis = this.http.get(this.root_utl+'pelisss');
  }
  ngAfterContentInit(): void {
      setTimeout(() => (this.pelis = this.http.get(this.root_utl+'pelisss')),1000)
  }
  onComprar(id:number){
    console.log(id);
    this.router.navigate(['verCarrito/'+id]);
  }
  ngOnDestroy(): void {
    console.log("Entro ngOnDestroy");
    this.cargarLista=false;
  }
  
}
