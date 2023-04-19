import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Reservation } from 'src/app/_models/reservation.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient, private authService: AuthService ) { }

  getReservations(): Observable<Reservation[]>{
    return this.http
    .get<Reservation[]>(environment.apiUrl + '/reservations', this.getHttpOptions())
    .pipe(catchError(this.handleError));
  }

  deleteReservation(){
    alert('Boton de borrado activado');
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 403){
      return throwError(()  => new Error('Prohibido'));
    } else {
      return throwError(()  => new Error('Error desconocido'));
    }
  }

  private getHttpOptions(){
    return{
      headers: new HttpHeaders({
        'x-access-token': this.authService.getToken()
      })
    };
  }
}
