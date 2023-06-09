import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  // Handle showing pages if user is logged in
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/pets']);
      return false;
    }
    return true;
  }
}
