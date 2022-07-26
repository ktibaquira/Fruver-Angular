import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  collapsed = false;
  title = 'Fruver';
  cliente = true;
  Listar=true;
  toggleCollapsed():void{
    this.collapsed= !this.collapsed;
  }
  closesidenav():void{
  this.collapsed=false;
  }
}
