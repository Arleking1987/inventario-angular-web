import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { FilterPipe } from './pipes/filter.pipe';
import { IngresarComponent } from './components/ingresar/ingresar.component';

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    BuscarComponent,
    ActualizarComponent,
    FilterPipe,
    IngresarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    DataTablesModule,
    MatButtonModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
