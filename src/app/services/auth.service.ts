import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';
import { RegisterForm } from 'src/app/models/RegisterForm.model';
import { LoginForm } from 'src/app/models/LoginForm.model';
import { ResetForm } from 'src/app/models/ResetForm.model';
import { RolesManager } from 'src/app/models/RolesManager.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private config: AppConfig) { }

  login (loginForm : LoginForm) {
    return this.http.post<{accessToken:any}>(this.config.getAuthUrl() +'login', loginForm)
      .pipe(tap(credential =>{ 
        localStorage.setItem(this.config.getTokenName(), JSON.stringify(credential));
    }));
  }

  register (registerForm : RegisterForm) {
    return this.http.post<{accessToken:string}>(this.config.getAuthUrl() +'register', registerForm)
      .pipe(tap(res=>{ 
    }));
  }

  logout () {
    return this.http.post(this.config.getAuthUrl() +'logout', "")
      .pipe(tap(response =>{}));
  }

  removeToken() {
    localStorage.removeItem(this.config.getTokenName());
    this.router.navigate(['/']);
  }

  isAuth() {
    return this.getToken() !== null;
  }
  getToken(){
    const token = localStorage.getItem(this.config.getTokenName());
    return (token != null)?JSON.parse(token).accessToken:null;
  }

  getRole () {
    const credentials = JSON.parse(localStorage.getItem(this.config.getTokenName()));
    return new RolesManager(credentials.roles)
  }

  getCurrentUser() {
    return this.http.get<{accessToken:any}>(this.config.getAuthUrl() +'user')
      .pipe(tap(user =>{ }));
  }

}
