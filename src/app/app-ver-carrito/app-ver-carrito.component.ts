import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar
import  {HttpClient} from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-ver-carrito',
  templateUrl: './app-ver-carrito.component.html',
  styleUrls: ['./app-ver-carrito.component.css']
})
export class AppVerCarritoComponent implements OnInit,OnDestroy {
  readonly root_utl = "https://61b9300238f69a0017ce5f02.mockapi.io/";

  pelisForm:FormGroup = this.fb.group({
    nombre: [null],
    detalle: [null],
    director: [null],
    clasificacion: [null],
    imagen: [null],
    costo: [null],
  })
  constructor(private route: ActivatedRoute,public http:HttpClient,private fb:FormBuilder) { }


  ngOnInit(): void {
    
  }

  onCargarPeli(){
    this.http.post(this.root_utl+'pelisss',this.pelisForm.value)
    .subscribe(respuesta => {
      console.log("Se agrego pelicula.");
    });
  }

  ngOnDestroy() {
    
  }
}
