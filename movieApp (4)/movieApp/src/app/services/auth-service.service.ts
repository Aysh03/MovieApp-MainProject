import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private router:Router) { }
  isLoggingIn(){
    return !!localStorage.getItem('jwt');
  }
  loggingOut(){
    localStorage.clear();
    this.router.navigateByUrl("/home")
  }
}
