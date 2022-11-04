// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Subject, map } from 'rxjs';


// @Component({
//   selector: 'app-buscar',
//   templateUrl: './buscar.component.html',
//   styleUrls: ['./buscar.component.css']
// })
// export class BuscarComponent implements OnDestroy,OnInit {
//   dtOptions: DataTables.Settings = {};
//   dtTrigger: Subject<any> = new Subject<any>();
//   data: any;
  

//   constructor(private httpClient: HttpClient) { }

//   ngOnInit(): void {
//     this.dtOptions = {
//       pagingType: 'full_numbers',
//       pageLength: 5,
//       language: {
//         url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'
//         }
//     };
//     this.httpClient.get('https://dummy.restapiexample.com/api/v1/employees')
//     .subscribe((res: any) => {
//       this.data = res.data;
//       this.dtTrigger.next(true);
//     });
    
//   }

//   ngOnDestroy(): void {
//     this.dtTrigger.unsubscribe();
//   }

// }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Person } from 'src/app/interfaces/person'; 
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

//import 'rxjs/add/operator/map';

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styleUrls: ['./buscar.component.css']
  })
  export class BuscarComponent implements OnDestroy,OnInit{

  dtOptions: DataTables.Settings = {};
  filterProduct = '';
  persons: Person[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.httpClient.get<Person[]>('http://127.0.0.1:5000/api/productos')
      .subscribe(data => {
        this.persons = data;
        console.log(this.persons)
        // Calling the DT trigger to manually render the table
       
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
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

  redirectToIngresar(){
    this.router.navigate(['/ingresar']);
  }
}
