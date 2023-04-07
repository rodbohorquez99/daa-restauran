import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}, 
  {path: 'menu', component: MenuComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'admin', redirectTo: 'admin/login'},
  {path: 'admin',  children: [
    { path: 'login', component: LoginComponent},
    { path: 'reservations', component: ReservationListComponent},
    { path: 'users', component: UserListComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
