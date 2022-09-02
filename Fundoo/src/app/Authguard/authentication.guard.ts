import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../services/authguard.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardService, private router: Router) {}
  canActivate(): boolean{
  //   return true;
  // }
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.Authguardservice.gettoken(); 
  }
}