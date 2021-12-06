import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:8081/api';

  headers = new Headers();

  constructor(private http: HttpClient) {}

  async fazerLogin(usuario: string, senha: string) {
    let headers = new HttpHeaders();

    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Credentials', 'true');
    this.headers.append(
      'Access-Control-Allow-Methods',
      'GET,HEAD,OPTIONS,POST,PUT'
    );
    this.headers.append(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );

    let options = {
      headers: headers,
    };

    return (
      this.http
        .post<User>(
          `${this.url}/usuarios/login?login=${usuario}&senha=${senha}`,
          options
        )
        .toPromise()
        .then((response) => {
          return response;
        })
    );
  }
}
