import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JwtService implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(request: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    if (this.authService.isAuth()) {
      request = this.addToken(request, this.authService.getToken());
    }
    
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private catchError(httpResponse:any){
    console.log(httpResponse.status)
    if(httpResponse.status == 401){
      this.router.navigate(['/']);
    }
  }
}