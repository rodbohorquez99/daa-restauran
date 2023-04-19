import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: User[]= [];

  displayedColumns: string[] = [
  'username',
  'name',
  'actions',

];

constructor(private userService: UserService){}

ngOnInit(): void {
 this.userService.getUsers().subscribe(users => (this.users = users));
}

addButtonClicked(){
  alert('Boton de adicion activado');
}
deletedButtonClicked(){
  this.userService.deleteUser();
}
}
