import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    {label: 'Inicio', link:''}, 
    {label: 'Cliente', link:'clientes'}, 
    {label: 'Sobre', linl:'sobre'}
  ]; 

}
