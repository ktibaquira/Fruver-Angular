import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SuperAdminComponent } from './pages/super-admin/super-admin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AgregarProductosComponent } from './pages/admin/agregar-productos/agregar-productos.component';
import { MaterialModule } from './_material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { VerProductosComponent } from './pages/admin/ver-productos/ver-productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './pages/super-admin/login/login.component';
import { DialogoEliminarComponent } from './pages/admin/dialogo-eliminar/dialogo-eliminar.component';
import { DialogoEditarComponent } from './pages/admin/dialogo-editar/dialogo-editar.component';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { DialogoProductosComponent } from './pages/cliente/dialogo-productos/dialogo-productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';




@NgModule({
    declarations: [
        AppComponent,
        SuperAdminComponent,
        AdminComponent,
        ClienteComponent,
        AgregarProductosComponent,
        VerProductosComponent,
        LoginComponent,
        DialogoEliminarComponent,
        DialogoEditarComponent,
        DialogoProductosComponent,
        NosotrosComponent,
        InicioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
