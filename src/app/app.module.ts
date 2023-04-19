import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'; 
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

import { MenuService } from './_services/menu/menu.service';
import { ReservationService } from './_services/reservation/reservation.service';
import { UserService } from './_services/user/user.service';
import { DeleteDialogConfirmComponent } from './delete-dialog-confirm/delete-dialog-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ReservationComponent,
    LoginComponent,
    ReservationListComponent,
    UserComponent,
    UserListComponent,
    DeleteDialogConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,

  ],
  providers: [MenuService, ReservationService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
