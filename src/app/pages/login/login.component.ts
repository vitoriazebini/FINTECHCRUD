import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);

  login: string = "";
  senha: string = "";
  botaoDesabilitado: boolean = true;

  //Valido se os campos foram preenchidos para habilitar o botão de login
  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  //Verifico se o usuário e senha são válidos
  fazerLogin() {
    if (this.login === 'admin@email.com' && this.senha === '123') {
      alert(`Bem-vindo ${this.login}!`);
      this.router.navigate(['/admin-clientes-listar']);
    } else {
      alert('Dados inválidos');
    }
  }

}
