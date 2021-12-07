import { User } from 'src/app/models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private formBuilder: FormBuilder,
    public alertController: AlertController
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
      this.fazerLogin();
    } else {
      this.exibirAlerta('Preencher todos os campos!');
    }
  }

  fazerLogin() {
    return this.userService
      .fazerLogin(this.usuarioLogin.login, this.usuarioLogin.senha)
      .then((response) => {
        if (response != null) {
          this.route.navigate(['/home'], {
            state: { data: { idUsuario: response.id, idMateria: null } },
          });
        } else {
          this.exibirAlerta('Usuário não localizado!');
        }
      });
  }

  navigateToRegister() {
    this.route.navigate(['/register']);
  }

  navigateToForgotPassword() {
    this.route.navigate(['/forgot-password']);
  }

  exibirAlerta(mensagem: string) {
    this.alertController
      .create({
        message: mensagem,
        buttons: ['OK'],
      })
      .then((res) => {
        res.present();
      });
  }
}
