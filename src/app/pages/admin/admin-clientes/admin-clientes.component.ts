import { Component, inject, OnInit } from '@angular/core';
import { Cliente } from '../../../model/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit {

  listaClientes:Cliente[] = [];

  //injeção de dependências 
  private service = inject(ClienteService); 

  ngOnInit(): void {
    this.listaClientes = this.service.listar(); 
  }

  excluir(id: string){}

  editar(id: string){}

}

