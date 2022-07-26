import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Crear = true;
  Listar=true;
  collapsed = false;
  ngOnInit(): void {
  }
  
  toggleCollapsed():void{
    this.collapsed= !this.collapsed;
  }
  closesidenav():void{
  this.collapsed=false;
  }
}

