import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Productos } from 'src/app/_model/Productos';
import { ProductosService } from 'src/app/_service/productos.service';
import { DialogoEditarComponent } from '../admin/dialogo-editar/dialogo-editar.component';
import { DialogoProductosComponent } from './dialogo-productos/dialogo-productos.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  displayedColumns: string[] = ['Imagen','Nombre', 'Precio','ver'];
  dataSource = new MatTableDataSource<Productos>();
  form: UntypedFormGroup;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router,
    private productosService: ProductosService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.productosService.listar().subscribe(
    data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;
      console.log(data);
  
    }
  );
  }
  abrirDialogoProducto(idProducto:number){
    const dialogRef = this.dialog.open(DialogoProductosComponent, {
      width: '400px',
      //data:{name: 'asckabhbfbf', productos: producto }
      data:{idProducto:idProducto}
    });
  }

}
