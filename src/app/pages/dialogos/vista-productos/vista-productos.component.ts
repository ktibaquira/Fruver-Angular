import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vista-productos',
  templateUrl: './vista-productos.component.html',
  styleUrls: ['./vista-productos.component.scss']
})
export class VistaProductosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VistaProductosComponent>,) { }

  ngOnInit(): void {
  }

}
