import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMessage: string = "";

  usernameRegistration: string = "";
  passwordRegistration: string = "";

  constructor(private http: HttpClient, private router: Router) {

  }

  login() {

    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/auth/authenticate', credentials, { responseType: 'json' })
      .subscribe({
        next: (response: any) => {

          const token = response.token;

          localStorage.setItem('token', token);

          this.router.navigate(['/carparts']);
        },
        error: (error) => {
          this.errorMessage = 'Invalid credentials';
          console.error('Login failed:', error);
        }
      });
  }

  register() {
    const credentials = {
      username: this.usernameRegistration,
      password: this.passwordRegistration,
    };

    this.http.post('http://localhost:8080/api/auth/register', credentials, { responseType: 'text' })
      .subscribe({
        next: (response: string) => {
          console.log(response);

        },
        error: (error) => {
          console.error('Registration error', error);
        }
      });
  }
}
