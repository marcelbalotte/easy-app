import { User } from 'src/app/models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuarioLogin = new User();
  
  constructor(private route: Router, private userService: UserService) {
    const navigation = this.route.getCurrentNavigation();

    const state = navigation.extras.state as {
      usuarioSalvo: any;
    };
  }
  
  ngOnInit() {}

  navigateToHome() {
    return this.userService
      .fazerLogin(this.usuarioLogin.login, this.usuarioLogin.senha)
      .then((response) => {
        if (response != null) {
          this.route.navigate(['/home']);
        }
      });
  }

  navigateToRegister() {
    this.route.navigate(['/register']);
  }

  navigateToForgotPassword() {
    this.route.navigate(['/forgot-password']);
  }
}
