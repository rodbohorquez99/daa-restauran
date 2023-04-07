import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/_models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[]= [
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
    {name: 'Rodrigo Bohorquez', email:'rodrigo.bohorquez@u-erre.mx', phone:'8117566665', people:2, reservationDate: new Date ('2023-03-30T06:00:00.000Z'), reservationSchedule: 7},
  ];
  constructor() { }
  getReservations(): Reservation[]{
    return this.reservations;
  }
}
