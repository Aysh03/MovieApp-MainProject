import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private usrSer: UserServiceService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {}

  login = new FormGroup({
    emailId: new FormControl(),
    password: new FormControl(),
  });

  get emailId() {
    return this.login.get('emailId');
  }
  get password() {
    return this.login.get('password');
  }

  errorMessage: any;

  responseData: any;
  sendLoginData() {
    console.log(this.login.value);
    this.usrSer.loginCheck(this.login.value).subscribe({
      next: (response) => {
        console.log(response);
        this.responseData = response;
        console.log(this.responseData.token);
        console.log(this.responseData.role);
        console.log(this.responseData.message);
        localStorage.setItem('jwt', this.responseData.token);
        localStorage.setItem('role', this.responseData.role);
        if (this.responseData.role == 'ROLE_ADMIN') {
          this.route.navigateByUrl('/AdminView');
        } else {
          this.route.navigateByUrl('/userView');
        }
      },

      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this._snackBar.open('Kindly Check Your Credentials!!', 'Failed', {
              duration: 5000,
              panelClass: ['mat-toolbar', 'mat-primary'],
            });
          } else if (error.status === 404) {
            this._snackBar.open(
              'User NotFound!! Kindly Register to Login ',
              'Failed',
              {
                duration: 5000,
                panelClass: ['mat-toolbar', 'mat-primary'],
              }
            );
          }
        }
      },
    });

    
  }
}
