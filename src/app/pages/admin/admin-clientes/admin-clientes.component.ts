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
   this.service.listar().subscribe({
    //quando a API responder...
    next: (clientes)=> this.listaClientes = clientes
   }); 
  }

  excluir(id: string){
    this.service.excluir(id).subscribe({
      next:()=>{
        this.listaClientes = this.listaClientes.filter(cliente => cliente.id !== id)
        alert("Cliente excluido com sucesso!")
      } 
    }); 
  }

  editar(id: string){}

}

