import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService){}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required,]],
      password: [null, [Validators.required,]],
      });
  }
formSubmit(form:any){
  this.authService.login({
    username: this.form.value.username,
    password: this.form.value.password,
  })
}

formCancel(){
  alert('Login cancelado');
}

}
