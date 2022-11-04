import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  formProduct: FormGroup;
  producto!: Person;
  
  referencia!: string;
  nombre!: string;
  tipo!: string;
  cantidad!: string;
  imagen!: string;
  descripcion!: string;

  constructor(private userService: UserService, 
    private router: Router, private apiService:ApiService) {
      this.formProduct = new FormGroup({
        referencia: new FormControl(),
        nombre: new FormControl(),
        tipo: new FormControl(),
        cantidad: new FormControl(),
        imagen: new FormControl(),
        descripcion: new FormControl(),
        buscarReferencia: new FormControl()
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
  redirectToIngresar(){
    this.router.navigate(['/ingresar']);
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
    this.apiService.actualizarProducto(this.producto).subscribe(data =>{
      console.log(data);
    })
    this.formProduct.reset();
  }

  buscarProducto(){    
    this.producto = {
      product_id : parseInt(this.formProduct.value['buscarReferencia'],10),
      product_name : this.formProduct.value['nombre'],
      product_tipeProduct : this.formProduct.value['tipo'],
      product_quantity : parseInt(this.formProduct.value['cantidad'], 10),
      product_image : this.formProduct.value['imagen'],
      product_description : this.formProduct.value['descripcion'],
      product_estado :"1"};
      this.formProduct.reset()
      
      console.log(this.producto.product_id);
      this.apiService.obtenerProducto(this.producto.product_id).subscribe(data =>{
        console.log(data); 
        this.referencia = data.product_id.toString();
        this.nombre = data.product_name;
        this.tipo = data.product_tipeProduct;
        this.cantidad = data.product_quantity.toString();
        this.imagen = data.product_image;
        this.descripcion = data.product_description;      
      });
  }

  eliminarProducto(){
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
    this.apiService.eliminarProducto(this.producto).subscribe(data =>{
      console.log(data);
    })
    this.formProduct.reset();
  }
    
   

}
