import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone:  [null],
      people: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      reservationDate:  [null, [Validators.required]],
      reservationSchedule:  [null, [Validators.required]],
    });
  }
formSubmit(form:any){
  alert('Gracias por reservar con nosotros\n' +  
  JSON.stringify(form.value, null, 4)
  );
}

formCancel(){
  alert('Reservacion cancelada');
}

}
