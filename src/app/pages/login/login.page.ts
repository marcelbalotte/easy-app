import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.route.navigate(['/home']);
  }

  navigateToRegister() {
    this.route.navigate(['/register']);
  }

  navigateToForgotPassword() {
    this.route.navigate(['/forgot-password']);
  }
}
