import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/_model/Productos';
import { ProductosService } from 'src/app/_service/productos.service';

@Component({
  selector: 'app-dialogo-editar',
  templateUrl: './dialogo-editar.component.html',
  styleUrls: ['./dialogo-editar.component.css']
})
export class DialogoEditarComponent implements OnInit {
  //variables
  idProducto:number;
  form: FormGroup;
  private id: number;
  private edicion: boolean;
  
  //constructor
  constructor(private productosService: ProductosService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,//parametros por url
    public dialogRef: MatDialogRef<DialogoEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public datos:any) { }
  
  ngOnInit(): void {
    console.log(this.datos);
    this.id= this.datos.idProducto;
    this.edicion = this.id != null;
    console.log("EL ID ES "+this.id);
    console.log("edicion " +this.edicion);
    this.inicializarFormularioVacio();
    if (this.edicion == true) {
      console.log(this.edicion);
      this.cargarDatos();
    } 
  }
  //metodos
  cargarDatos() {
    this.productosService.listarPorId(this.id).subscribe(data => {
      this.form.get('nombre')?.setValue(data.nombre);
      this.form.get("precio")?.setValue(data.precio);
      this.form.get("descripcion")?.setValue(data.descripcion);
    });
  }
  inicializarFormularioVacio() {
    this.form = new FormGroup({
      //validadciones y variables 
      'nombre': new FormControl('', [Validators.required]),
      'precio': new FormControl('', [Validators.required]),
      'descripcion': new FormControl()
    });
  }
  editar(){
    let producto = new Productos();//objeto
    producto.nombre = this.form.value['nombre'];
    producto.precio = this.form.value['precio'];
    producto.descripcion = this.form.value['descripcion'];
    
    if (this.edicion === true) {
      producto.idProducto =  this.id;
      this.productosService.editar(producto).subscribe(data =>{
        console.log(data);
        this.openSnackBar('El producto actualizado exitosamente');
        this.form.reset();//resetear el formulario
        this.cerrarDialogo();
        this.productosService.mensajeCambio.next('Se han editado los datos correctamente');
        this.router.navigate(['/VerProductos']);
      });
    }
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
