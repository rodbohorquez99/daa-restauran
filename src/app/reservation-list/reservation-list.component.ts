import { Component, OnInit } from '@angular/core';
import { Reservation } from '../_models/reservation.model';
import { ReservationService } from '../_services/reservation/reservation.service';

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

constructor(private reservationService: ReservationService ) {}

ngOnInit(): void {
  this.reservationService.getReservations()
  .subscribe((reservations) => (this.reservations = reservations));
}

editButtonClicked(){
  alert('Boton de edicion activado');
}
deletedButtonClicked(){
  this.reservationService.deleteReservation();
}
}
