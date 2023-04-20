import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogConfirmComponent } from '../delete-dialog-confirm/delete-dialog-confirm.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: User[]= [];

  displayedColumns: string[] = [ 'username',  'name', 'actions'];

 constructor(private userService: UserService, private dialog: MatDialog) {}

 ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  deletedButtonClicked(_id: string) {  
   const dialogRef = this.dialog.open(DeleteDialogConfirmComponent);
   dialogRef.afterClosed().subscribe(result => {
    if(result === true){
      this.userService.deleteUser(_id).subscribe({
        next: () => this.userService.getUsers().subscribe((users) => (this.users = users))
      });
    }
   });
  }

}
