import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserService } from '../_services/user/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      name: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(32), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,32}$/)]],
      });
  }
formSubmit(form:any){
 this.userService.createUser(form.value).subscribe({
  next: () => this.router.navigate(['/admin/users']),
 });
}


}
