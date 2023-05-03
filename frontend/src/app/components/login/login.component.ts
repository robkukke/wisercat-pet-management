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

  // Handle login form submit
  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(() => {
      // Store the logged in user's username in Local Storage
      localStorage.setItem('currentUser', this.username);
      // Navigate to pets list
      this.router.navigate(['/pets']);
    }, () => {
      // Flag to show login submit error field if verification fails
      this.loginFailed = true;
    });
  }
}
