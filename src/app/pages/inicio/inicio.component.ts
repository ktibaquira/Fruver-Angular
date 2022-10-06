import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Productos } from 'src/app/_model/Productos';
import { ProductosService } from 'src/app/_service/productos.service';
import { VistaProductosComponent } from '../dialogos/vista-productos/vista-productos.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  //variables
  productos: Productos [] = [];
  @Input() producto: Productos={
    idProducto:0, 
    nombre: ' ',
    precio: 0,
    descripcion: '',
    imagen:' ',
    correoAdmin:' '
  }
  /*@Output() addedProduct = new EventEmitter<Productos>();*/
  constructor(
    private productosService:ProductosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //asincrona
    this.productosService.listar().subscribe(data =>{
      console.log(data);
      //hacemos la asignacion al arreglo
      this.productos= data;

    });
  }
  //metodos
  openDialog() {
    const dialogRef = this.dialog.open(VistaProductosComponent, {
      width: '400px',
      //data:{name: 'asckabhbfbf', productos: producto }
      //data:{idProducto:idProducto}
    });
  }
}
