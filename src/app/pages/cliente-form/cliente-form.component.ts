import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {

  cliente:Cliente = {} as Cliente;
  private service = inject(ClienteService);
  private router = inject(Router); 
  confirmarSenha:string = ''; 

  salvar() {
    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

   this.service.incluir(this.cliente).subscribe({
      next: (cliente) =>{
         this.cliente = cliente; 
        alert("Cliente cadastrado com sucesso!"); 
        this.router.navigate([`/admin-clientes-listar`]); 
      }
       
   }); 

  }

}
