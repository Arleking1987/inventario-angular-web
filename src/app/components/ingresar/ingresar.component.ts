import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  formProduct: FormGroup;
  producto!: Person;

  constructor(private httpClient: HttpClient, private userService: UserService, 
    private router: Router, private apiService:ApiService) {
    this.formProduct = new FormGroup({
      referencia: new FormControl(),
      nombre: new FormControl(),
      tipo: new FormControl(),
      cantidad: new FormControl(),
      imagen: new FormControl(),
      descripcion: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

  redirectToMain(){
    this.router.navigate(['/main']);
  }

  redirectToBuscar(){
    this.router.navigate(['/buscar']);
  }

  redirectToActualizar(){
    this.router.navigate(['/actualizar']);
  }

  onSubmit(){
    this.producto = {
      product_id : parseInt(this.formProduct.value['referencia'],10),
    product_name : this.formProduct.value['nombre'],
    product_tipeProduct : this.formProduct.value['tipo'],
    product_quantity : parseInt(this.formProduct.value['cantidad'], 10),
    product_image : this.formProduct.value['imagen'],
    product_description : this.formProduct.value['descripcion'],
    product_estado :"1"};
    console.log( this.formProduct);
    console.log( this.producto);
    this.apiService.ingresarProducto(this.producto).subscribe(data =>{
      console.log(data);
    })
    this.formProduct.reset();
  }

}
