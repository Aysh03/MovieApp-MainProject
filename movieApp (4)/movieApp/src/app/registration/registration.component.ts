import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  profilePicData:string = '';
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private userService: UserServiceService,
    private httpClient:HttpClient,private dialog: MatDialog
  ) {}
  
  ngOnInit(): void {}
  signupForm = this.fb.group(
    {
            firstName: ['', [Validators.required,Validators.minLength(3),
      Validators.maxLength(60),
      Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      lastName: ['', [Validators.required, Validators.minLength(2)], Validators.maxLength(60)],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
          ),
        ],
      ],
   //image validators requires
   emailId: ['', [Validators.required,  Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      fileInput:[''],
      age: ['', [Validators.required, Validators.min(18),Validators.max(100)]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),Validators.minLength(10),Validators.maxLength(10)],
      ],
      address: this.fb.group({
      
        street: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(20),Validators.pattern("[ a-zA-Z]*")]],
    
        city: ['',[Validators.required,Validators.minLength(5), Validators.maxLength(20),Validators.pattern("[ a-zA-Z]*")]],
        state: ['',[Validators.required,Validators.minLength(5), Validators.maxLength(20),Validators.pattern("[ a-zA-Z]*")]],
        zipcode: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(7),
              Validators.pattern('^[0-9]{7}$'),
          ],
        ],
      }),
    },
    { validators: [this.mustMatchValidator] }
  );


  // signupForm = new FormGroup({
  //   'firstName':new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-z].*")]),
  //   'lastName':new FormControl( '', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
  //   'emailId':new FormControl('',[Validators.email,Validators.required]),
  //   'fileInput':new FormControl('',[]),
  //     'age':new FormControl ('', [Validators.required, Validators.min(18),Validators.max(100)]),
  //   'mobileNumber':new FormControl('',[Validators.required,Validators.pattern("[0-9].*"),Validators.minLength(10),Validators.maxLength(10)]),
  //   'password':new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  //   'confirmPassword':new FormControl('', [ Validators.required, Validators.pattern(
  //               /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ ),]),

  //   'address':new FormGroup(
  //     {
  //       'street':new FormControl ('',[Validators.required, Validators.minLength(5), Validators.maxLength(20),Validators.pattern("[ a-zA-Z]*")]),
  //       'city': new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(20),Validators.pattern("[ a-zA-Z]*")]),
  //        'state': new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(20),Validators.pattern("[ a-zA-Z]*")]),
  //        'zipcode': new FormControl('',
  //        [
  //          Validators.required,
  //          Validators.minLength(5),
  //          Validators.maxLength(7),
  //            Validators.pattern('^[0-9]{7}$'),
  //        ],)
                  
  //          }
  //   ),
  // },
  // { validators: [this.mustMatchValidator] }  
  // )


  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get emailId() {
    return this.signupForm.get('emailId');
  }
  get fileInput(){
    return this.signupForm.get('fileInput');
  }
  get mobileNumber() {
    return this.signupForm.get('mobileNumber');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get age() {
    return this.signupForm.get('age');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  get street(){
    return this.signupForm.get('address')?.get('street')
  }

  get city(){
    return this.signupForm.get('address')?.get('city')
  }

  get state(){
    return this.signupForm.get('address')?.get('state')
  }


  get zipcode() {
    return this.signupForm.get('address')?.get('zipcode');
  }


  // get firstName() {
  //   return this.signupForm.get('firstName') ;
  // }
  // get lastName() {
  //   return this.signupForm.get('lastName') ;
  // }
  // get emailId() {
  //   return this.signupForm.get('emailId');
  // }
  // get fileInput():FormControl{
  //   return this.signupForm.get('fileInput') as FormControl;
  // }
  // get mobileNumber():FormControl {
  //   return this.signupForm.get('mobileNumber') as FormControl;
  // }
  // get password():FormControl {
  //   return this.signupForm.get('password') as FormControl;
  // }
  // get age():FormControl {
  //   return this.signupForm.get('age') as FormControl;
  // }
  // get confirmPassword():FormControl {
  //   return this.signupForm.get('confirmPassword') as FormControl;
  // }
  // get street():FormControl{
  //   return this.signupForm.get('address')?.get('street') as FormControl
  // }

  // get city():FormControl{
  //   return this.signupForm.get('address')?.get('city') as FormControl
  // }

  // get state():FormControl{
  //   return this.signupForm.get('address')?.get('state') as FormControl
  // }


  // get zipcode():FormControl {
  //   return this.signupForm.get('address')?.get('zipcode') as FormControl;
  // }

  uploadedImage: File | undefined;
  dbImage: any;
  postResponse: any;
  successResponse: string | undefined;
  image: any;
  public onImageUpload(event:any) {
    // this.uploadedImage = event.target.files[0];
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileInput?.setValue(file);
    }
  }
  // imageUploadAction() {
  //   const imageFormData = new FormData();
  //   imageFormData.append('image', this.uploadedImage!, this.uploadedImage!.name);
  //   this.httpClient.post('http://localhost:8080/upload/image/', imageFormData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.postResponse = response;
  //         this.successResponse = this.postResponse.body.message;
  //       } else {
  //         this.successResponse = 'Image not uploaded due to some error!';
  //       }
  //     }
  //     );
  //   }
  // viewImage() {
  //   this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
  //     .subscribe(
  //       res => {
  //         this.postResponse = res;
  //         this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
  //       }
  //     );
  // }

  profileTouserUservice:string="";
  sendSignupData(): void {
    console.log('hello register');
    
    const imageFormData = new FormData();
    imageFormData.append('profilePic',this.fileInput?.value ?? "");
    imageFormData.append('emailId', this.emailId?.value ?? "");
    imageFormData.append('firstName', this.firstName?.value ?? "");
    imageFormData.append('lastName', this.lastName?.value ?? "");
    imageFormData.append('password', this.password?.value ?? "");
    imageFormData.append('mobileNumber', this.mobileNumber?.value ?? "");
    imageFormData.append('age', this.age?.value ?? "");
    imageFormData.append('address.street', this.street?.value ?? "");
    imageFormData.append('address.city', this.city?.value ?? "");
    imageFormData.append('address.state', this.state?.value ?? "");
    imageFormData.append('address.zipcode', this.zipcode?.value ?? "");
    
            this.userService.registerUser(imageFormData).subscribe({
      next: (userData:any) => {

        console.log('userdata added');
        console.log(userData);
        this.profilePicData = userData.profilePic.data;
      // this.userService.profilePicDetails=this.profilePicData
console.log(this.userService.profilePicDetails);

      this._snackBar.open(
          'Congrats!!You have submiited the form!!',
          'success',
          {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
            
          }
          
        );
    
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 409) {
            this._snackBar.open('User Already Exist!!   Kindly Use different Email ID', 'Failed', {
              duration: 5000,
              panelClass: ['mat-toolbar', 'mat-primary'],
            });
          } 
        }
      },
    });
    
  }
  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get('password')?.value;
    const confirmPasswordValue = fg.get('confirmPassword')?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { mustMatch: false };
    }
    return null;
  }


  editStatus: boolean = false;
  
  canDeActivate() {
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
