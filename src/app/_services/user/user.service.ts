import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[]= [
    {username: 'rodrigo.bohorquez', name: 'Rodrigo Bohorquez'},
    {username: 'rodrigo.bohorquez', name: 'Rodrigo Bohorquez'},
    
  ];
  constructor() { }

  getUsers(): User[]{
    return this.users;
  }

  deleteUser(){
    alert('Boton de borrado activado');
  }
}
