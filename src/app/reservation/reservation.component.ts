import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../_services/reservation/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ThankYouDialogComponent } from '../thank-you-dialog/thank-you-dialog.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  editMode: boolean = false;

  
  constructor(
   private fb: FormBuilder,
   private reservationService: ReservationService,
   private router: Router,
   private dialog: MatDialog,
   private route: ActivatedRoute,
   ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      _id: [null],
      name: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone:  [null], 
      people: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      reservationDate:  [null, [Validators.required]],
      reservationSchedule:  [null, [Validators.required]],
    });

    const _id = this.route.snapshot.params['id'];
    if(_id){
      this.reservationService.getOneReservations(_id).subscribe({
        next: reservation => {
          this.form.patchValue(reservation);
          this.editMode = true;
        }
      })
    }
  }

  formSubmit(form:any){
    if(this.editMode) {
      this.reservationService.updateReservation(this.form.value).subscribe({
        next: () => {
           this.router.navigate(['/admin/reservations']);
      },
      }); }else{
    this.reservationService.createReservation(this.form.value).subscribe({
      next: () => {
        const dialogRef = this.dialog.open(ThankYouDialogComponent);
        dialogRef.afterClosed().subscribe(()=> this.router.navigate(['/']));
    },
    });
  }
  }
   
formCancel(){
  if(this.editMode){
    this.router.navigate(['/admin/reservations']);
  }else {
    this.router.navigate(['/']);
  }
}

}
