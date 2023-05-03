import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(() => {
      localStorage.setItem('currentUser', this.username);
      this.router.navigate(['/pets']);
    }, () => {
      this.loginFailed = true;
    });
  }
}
