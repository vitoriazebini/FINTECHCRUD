import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { SobreComponent } from './pages/sobre/sobre.component';


export const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: 'sobre', component: SobreComponent}
    //caminho : 'nome', componet: nome dele que quero puxar
]; 
