import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listar(): Cliente[]{
    return [
      {id: "3", nome: "Laura", sobrenome: "Silva", cpf:"12345678910", 
        dataNascimento: "2006-10-01", email:"laura@email.com"},

      {id: "4", nome: "Paulo", sobrenome: "Eduardo", cpf:"12345678910", 
      dataNascimento: "2008-03-02", email:"paulo@email.com"}
    ]

  }
}
