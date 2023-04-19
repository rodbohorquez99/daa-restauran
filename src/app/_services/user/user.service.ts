import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/_models/user.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUsers(): Observable<User[]>{
    return this.http
    .get<User[]>(environment.apiUrl + '/users', this.getHttpOptions())
    .pipe(catchError(this.handleError));
  }

  createUser(user: User): Observable<User> {
    return this.http
    .post<User>(environment.apiUrl + '/users', user, this.getHttpOptions())
    .pipe(catchError(this.handleError));
  }  

  deleteUser(_id: string){
      return this.http.delete(environment.apiUrl + '/users/' + _id, this.getHttpOptions())
      .pipe(catchError(this.handleError));
    }

  private handleError(error: HttpErrorResponse){
    if (error.status === 403){
      return throwError(()  => new Error('Credenciales invalidas'));
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