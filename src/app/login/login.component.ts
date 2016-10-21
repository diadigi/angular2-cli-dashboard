import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  headers: Headers;
  authErr: boolean = false;

  constructor(public http: Http, public router: Router) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
  }

  ngOnInit() { }

  public login(event, email, password): void {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    this.http.post('http://localhost:3000/sessions/create', body, { headers: this.headers })
      .subscribe(
        response => {
          this.successHandler(response.json().id_token);
        },
        error => {
          this.errorHandler();
        }
      );
  }

  private successHandler(authToken: string): void {
    localStorage.setItem('id_token', authToken);
    this.router.navigate(['']);
  }

  private errorHandler(): void {
    this.authErr = true;
  }
}
