import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductosService } from 'src/app/_service/productos.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Productos } from 'src/app/_model/Productos';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})



export class AgregarProductosComponent implements OnInit {
  //variables
  form: FormGroup;
  private id: number;
  private edicion: boolean;
  //constructor
  constructor(private productosService:ProductosService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,//parametros por url
    private router: Router//hacer redireccion por codigo
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      //validadciones y variables 
      'nombre': new FormControl('', [Validators.required]),
      'precio': new FormControl('', [Validators.required]),
      'descripcion': new FormControl()
    });
    /*this.route.paramMap.subscribe(params => {
    if(params.get("idProducto")){
      //console.log(params.get("idProducto"));
      this.id = Number(params.get("idProducto"));
      console.log("EL ID ES "+this.id);
      this.edicion = Number(params.get("idProducto"))!= null;
    }
    });
    /*this.inicializarFormularioVacio();
    if (this.edicion == true) {
      console.log(this.edicion);
      this.cargarDatos();
    } */  
    /*this.form = new FormGroup({
      //validadciones y variables 
      'nombre': new FormControl('', [Validators.required]),
      'precio': new FormControl(0, [Validators.required]),
      'descripcion': new FormControl('',[Validators.required])
    });*/
  }
 /* cargarDatos() {
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
  }*/
  //metodo guardar
  guardar(){
    let producto = new Productos();//objeto
    producto.nombre = this.form.value['nombre'];
    producto.precio = this.form.value['precio'];
    producto.descripcion = this.form.value['descripcion'];
    
      this.productosService.guardar(producto).subscribe( ()=>{
        this.form.reset();//resetear el formulario
        this.openSnackBar('El producto se guardo exitosamente');
        this.productosService.mensajeCambio.next('Se han guardado los datos correctamente');
        /*this.router.navigate(['/VerProductos']);*/
      });
    
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Información',{
      duration: 3000,
    });
  }
  //mensaje
  get nombre(){
    return this.form.get('nombre');
  }
  get precio(){
    return this.form.get('precio');
  }
  get descripcion(){
    return this.form.get('descripcion');
  }
}
