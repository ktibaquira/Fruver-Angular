import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Productos } from 'src/app/_model/Productos';
import { ProductosService } from 'src/app/_service/productos.service';

@Component({
  selector: 'app-dialogo-productos',
  templateUrl: './dialogo-productos.component.html',
  styleUrls: ['./dialogo-productos.component.css']
})
export class DialogoProductosComponent implements OnInit {
  //variables
  idProducto:number;
  private id: number;
  private edicion: boolean;
  
  constructor(private productosService: ProductosService,
    public dialogRef: MatDialogRef<DialogoProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  cerrarDialogo(){
    this.dialogRef.close({event:'cancelo'});
  }
}
