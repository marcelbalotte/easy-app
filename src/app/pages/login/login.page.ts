import { User } from 'src/app/models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarioLogin = new User();
  formLogin: FormGroup;

  constructor(
    private route: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    const navigation = this.route.getCurrentNavigation();

    const state = navigation.extras.state as {
      usuarioSalvo: any;
    };

    this.formLogin = this.formBuilder.group({
      login: new FormControl('', Validators.compose([Validators.required])),

      senha: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {}

  navigateToHome() {
    if (this.formLogin.valid) {
      alert('form is valid'); //TODO: TROCAR POR POPUP
      this.fazerLogin();
    } else {
      alert('empty fields');
    }
  }

  fazerLogin() {
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
