import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Productos } from '../_model/Productos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  //url base
  private url: string = `${environment.HOST}productos`;
  constructor(private http: HttpClient) {}
//variables
mensajeCambio = new Subject<string>();//variable reactiva

  //listar todo - get
  listar() {
    return this.http.get<Productos[]>(`${this.url}`);
  } 
  //listar por id - get
  listarPorId(idProducto:number){
    //https://fruver-app.herokuapp.com/productos/getProducto/undefined
    return this.http.get<Productos>(`${this.url}/getProducto/${idProducto}`);
  }
  //guardar - post
  guardar(productos: Productos){
    return this.http.post(`${this.url}`,productos);
  }
  //modificar - put
  editar(productos: Productos){
    return this.http.post(`${this.url}`,productos);
  }
  //eliminar - delect
  //https://fruver-app.herokuapp.com/productos/deleteProducto/22
  eliminar(idProducto:number){
    return this.http.delete(`${this.url}/deleteProducto/${idProducto}`);
  }
}
