import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = 'http://127.0.0.1:5000/api/productos'
  person!: Person;
  constructor(private http:HttpClient) { }

  ingresarProducto(form:Person):Observable<string>{
    return this.http.post<string>(this.url,form);
  }

  obtenerProducto(id:any):Observable<Person>{   
   return this.http.get<Person>(this.url + '/'+id.toString())          
  }

  actualizarProducto(form:Person):Observable<string>{
    return this.http.put<string>(this.url + '/' + form.product_id.toString(), form);

  }

  eliminarProducto(form:Person):Observable<string>{
    return this.http.delete<string>(this.url + '/' + form.product_id.toString());
  }
}
