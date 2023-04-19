import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  error: string ='';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required,]],
      password: [null, [Validators.required,]],
      });
  }
formSubmit(form:any){
  this.error = '';
  this.authService.login({
    username: this.form.value.username,
    password: this.form.value.password,
  })
  .subscribe({
    next: () => this.router.navigate(['/admin/reservations']),
    error: (err) => (this.error = err.message),
  });
}

formCancel(){
  alert('Login cancelado');
}

}
