import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AgregarProductosComponent } from './pages/admin/agregar-productos/agregar-productos.component';
import { DialogoEditarComponent } from './pages/admin/dialogo-editar/dialogo-editar.component';
import { VerProductosComponent } from './pages/admin/ver-productos/ver-productos.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/super-admin/login/login.component';

const routes: Routes = [
  //inicio
  {path: 'home', component:InicioComponent},
  //SuperAdmin
  {path:'login', component:LoginComponent},
  //Admin
  {path:'admin', component:AdminComponent},
  {path:'agregarProductos', component: AgregarProductosComponent},
  {path:'VerProductos', component:VerProductosComponent},
  {path:'edicion/:idProducto', component:DialogoEditarComponent},

  //cliente
  {path:'cliente', component:ClienteComponent},
  //nosotros
  {path:'nosotros', component:NosotrosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
