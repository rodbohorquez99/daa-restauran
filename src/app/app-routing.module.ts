import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './_services/auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}, 
  {path: 'menu', component: MenuComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'admin', redirectTo: 'admin/reservations'},
  {
    path: 'admin', 
     children: [
    { path: 'login', component: LoginComponent},
    { path: 'reservations', component: ReservationListComponent, canActivate: [AuthGuard]},
    { path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
