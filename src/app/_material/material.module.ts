import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDrawer, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatError, MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule,  } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from '../app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { SwiperModule } from 'swiper/angular';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTreeModule,
    MatExpansionModule,
    AppRoutingModule,
    MatDialogModule,
    SwiperModule,
    MatCardModule

  ],
  exports:[
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTreeModule,
    MatExpansionModule,
    AppRoutingModule,
    MatDialogModule,
    SwiperModule,
    MatCardModule

  ]
})
export class MaterialModule { }
