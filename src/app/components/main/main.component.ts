import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

  redirectBuscar(){
    this.router.navigate(['/buscar']);
  }

  redirectIngresar(){
    this.router.navigate(['/ingresar']);
  }

  redirectToActualizar(){
    this.router.navigate(['/actualizar']);
  }
  
}
