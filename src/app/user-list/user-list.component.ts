import { Component } from '@angular/core';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[]= [
    {username: 'rodrigo.bohorquez', name: 'Rodrigo Bohorquez'},
    {username: 'rodrigo.bohorquez', name: 'Rodrigo Bohorquez'},
    
  ];

  displayedColumns: string[] = [
  'username',
  'name',
  'actions',

];

addButtonClicked(){
  alert('Boton de adicion activado');
}
deletedButtonClicked(){
  alert('Boton de borrado activado');
}
}
