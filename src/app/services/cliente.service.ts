import { inject, Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteHttp = inject(HttpClient); 
  private API = "http://localhost:3000/clientes"; 

  constructor() { }

  listar():Observable<Cliente[]>{
    return this.clienteHttp.get<Cliente[]>(this.API); 

  }
  incluir(cliente:Cliente):Observable<Cliente>{
     return this.clienteHttp.post<Cliente>(this.API, cliente); 
  }

  excluir(id:string):Observable<void>{
    return this.clienteHttp.delete<void>(`${this.API}/${id}`); 
  }
   
  

}
