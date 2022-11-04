import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/main'},
  {path: 'main', component: MainComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path: 'register', component: RegisterComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'actualizar', component: ActualizarComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
