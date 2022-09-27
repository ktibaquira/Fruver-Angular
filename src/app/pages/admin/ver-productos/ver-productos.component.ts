import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/_model/Productos';
import { ProductosService } from 'src/app/_service/productos.service';
import { DialogoEditarComponent } from '../dialogo-editar/dialogo-editar.component';
import { DialogoEliminarComponent } from '../dialogo-eliminar/dialogo-eliminar.component';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {

  displayedColumns: string[] = ['Editar','Nombre', 'Precio', 'Descripcion'];
  dataSource = new MatTableDataSource<Productos>();
  elemento:Productos;
  form: UntypedFormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private productosService: ProductosService, 
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.productosService.mensajeCambio.subscribe(data => {
      this.openSnackBar(data);
      
    });
    //this.router.navigate(['/edicion', this.elemento.id] );
    this.productosService.listar().subscribe(
      data=>{
        this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  //metodos
  abrirDialogoEliminar(idProducto:number){
    const dialogRef = this.dialog.open(DialogoEliminarComponent, {
      width: '400px',
      //data:{name: 'asckabhbfbf', productos: producto }
      data:{idProducto: idProducto}
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('dialogo cerrado');
      if(result.event === 'elimino'){
        console.log('elimino');
        console.log(result.data);
      }else if(result.event === 'cancelo'){
        console.log('cancelo');
      }
    });
  }
  abrirDialogoEditar(idProducto:number){
    
    const dialogRef = this.dialog.open(DialogoEditarComponent, {
      width: '400px',
      //data:{name: 'asckabhbfbf', productos: producto }
      data:{idProducto:idProducto}
    });
    /*dialogRef.afterClosed().subscribe(result=>{
      console.log('dialogo cerrado');
      if(result.event === 'edito'){
        console.log('edito');
        console.log(result.data);
      }else if(result.event === 'cancelo'){
        console.log('cancelo');
      }
    });*/
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Información',{
      duration: 3000,
    });
  }

}
