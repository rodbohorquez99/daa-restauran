import { Component, OnInit } from '@angular/core';
import { Reservation } from '../_models/reservation.model';
import { ReservationService } from '../_services/reservation/reservation.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogConfirmComponent } from '../delete-dialog-confirm/delete-dialog-confirm.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[]= [];

  displayedColumns: string[] = [
  'reservationDate',
  'reservationSchedule',
  'people',
  'name',
  'email',
  'phone',
  'actions',
];

constructor(
  private reservationService: ReservationService,
  private dialog: MatDialog ,
  private router: Router,
   ) {}

ngOnInit(): void {
  this.reservationService.getReservations()
  .subscribe((reservations) => (this.reservations = reservations));
}

editButtonClicked(_id: string){
  this.router.navigate(['/admin/reservations/edit/'+_id]);
}
deletedButtonClicked(_id: string) {  
  const dialogRef = this.dialog.open(DeleteDialogConfirmComponent);
  dialogRef.afterClosed().subscribe(result => {
   if(result === true){
     this.reservationService.deleteReservation(_id).subscribe({
       next: () => 
       this.reservationService
       .getReservations()
       .subscribe((reservations) => (this.reservations   = reservations  ))
     });
   }
  });
 }
}
