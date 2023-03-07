import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { RegistrationComponent } from '../registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  constructor(private dialog: MatDialog){}
  canDeactivate(
    component: RegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          title: 'Are you sure?',
          message: 'Do you want to leave this page?'
        }
      });
  
      return dialogRef.afterClosed().pipe(map(result =>
  {
        if (result === true) {
          return true;
        } else {
          return false;
        }
      }));
  }
  
}
