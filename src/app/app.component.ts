import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService){}

  getNavMenuType(): string{
    if(this.router.url === '/admin/login'){
      return 'none';
    } else if (this.router.url.startsWith('/admin')) {
      return 'admin';
    }else{
      return 'customer';
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/admin/login']);
  }
}
