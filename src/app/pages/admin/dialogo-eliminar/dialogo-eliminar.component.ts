import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Productos } from 'src/app/_model/Productos';
import { ProductosService } from 'src/app/_service/productos.service';

@Component({
  selector: 'app-dialogo-eliminar',
  templateUrl: './dialogo-eliminar.component.html',
  styleUrls: ['./dialogo-eliminar.component.css']
})
export class DialogoEliminarComponent implements OnInit {
  //variables
  idProducto:number;
  constructor(private productosService: ProductosService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialogRef: MatDialogRef<DialogoEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data.idProducto);
  }
  eliminar(){
    this.productosService.eliminar(this.data.idProducto).subscribe(data =>{
      this.dialogRef.close({event:'elimino',data});
      this.openSnackBar('El producto se elimino exitosamente');
      this.productosService.mensajeCambio.next('Se ha eliminado los datos correctamente');
    });
  }
  cerrarDialogo(){
    this.dialogRef.close({event:'cancelo'});
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Información',{
      duration: 3000,
    });
  }

}
