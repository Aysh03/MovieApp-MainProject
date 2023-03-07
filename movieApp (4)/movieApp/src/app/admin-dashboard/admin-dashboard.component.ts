import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'

import { AdminServiceService } from '../services/admin-service.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { DeleteComponent } from '../delete/delete.component'
import { AdminEditCompComponent } from '../admin-edit-comp/admin-edit-comp.component'
import { FeedbackService } from '../services/feedback.service'
import { UserServiceService } from '../services/user-service.service'






@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {

 triggerButton:boolean=false;
 triggerbutton1:boolean=false;



  ngOnInit(): void {
    // this.getMovieData()
    // this.AllUsersFeedback();
    this.getUserDetails() 
  }
  constructor(
    private adminservice: AdminServiceService,
    private matdialog: MatDialog,private _snackBar:MatSnackBar,private dialog: MatDialog,private feedbackservice:FeedbackService,private userservice:UserServiceService
  ) {

    this.AllUsersFeedback();
  }
  // name = 'Angular';
  // @ViewChild(MatAccordion)
  // acco: MatAccordion = new MatAccordion;
  // ngOnInit(): void {

  //  adminMovieDataForm = this.fb.group(
  //   {
  //     movieId: [''],
  //     movieName : [''],
  //     rating:[''],
  //     language:['']
  //   })

  // movieId:any;
  // movieName :any;
  // rating:any;
  // language:any;

  adminMovieDataForm = new FormGroup({
    movieId: new FormControl(''),
    movieName: new FormControl(''),
    rated: new FormControl(),
    lang: new FormControl(),
  })

  adminMovieUpdatedDataForm = new FormGroup({
    movieId: new FormControl(''),
    movieName: new FormControl(''),
    rated: new FormControl(),
    lang: new FormControl(),
  })

  get movieId() {
    return this.adminMovieDataForm.get('movieId')
  }
  get movieName() {
    return this.adminMovieDataForm.get('movieName')
  }
  get rating() {
    return this.adminMovieDataForm.get('rating')
  }

  get language() {
    return this.adminMovieDataForm.get('language')
  }

  get MovieId() {
    return this.adminMovieUpdatedDataForm.get('movieId')
  }
  get MovieName() {
    return this.adminMovieUpdatedDataForm.get('movieName')
  }
  get Rating() {
    return this.adminMovieUpdatedDataForm.get('rating')
  }

  get Language() {
    return this.adminMovieUpdatedDataForm.get('language')
  }

  // onImageUpload(ab:any){

  // }

  // addMovie(){}

  moviedata: any
  sendMovieData(): void {
    this.adminservice.addMovies(this.adminMovieDataForm.value).subscribe({
      next: (result: any) => {
        this.moviedata = result
        console.log(this.moviedata)
        this.getMovieData()
      },
    })
  }

  sendMovieUpdatedData(): void {
    this.adminservice
      .updateMovie(this.adminMovieUpdatedDataForm.value)
      .subscribe({
        next: (result: any) => {
          this.moviedata = result
          console.log(this.moviedata)
          this.getMovieData()
        },
      })
  }

  getEditedMovieData(moviedetails: any) {
    console.log(moviedetails)
    this.adminMovieUpdatedDataForm.setValue(moviedetails);
    this.getMovieData();

    }
    


  openDeleteDialog(movieId: string) { const dialogRef = this.dialog.open(DeleteComponent); 
    dialogRef.afterClosed().subscribe(result => 
    { if (result === 'yes') { 
      
      this.adminservice.deleteMovie(movieId).subscribe((result) => {
        this.getMovieData();
  })
      console.log('Deleting item...'); 
      
       this._snackBar.open(
        'Congrats!!You have deleted successfully!!',
      'success',
       {
         duration: 3000,
         panelClass: ['mat-toolbar', 'mat-primary'],
          
        }
        
       );
    }
     }); } 



  moviedat: any
  getMovieData(): void {
    this.adminservice.getAllMovies().subscribe({
      next: (result: any) => {
        this.moviedat = result
        console.log('all data')

        console.log(this.moviedat)
      },
    })
  }



  feedbackUserdata:any;
  AllUsersFeedback(){
this.feedbackservice.getFeedbackDataFromConsumer().subscribe({
next:(result)=>{
this.feedbackUserdata=result;
console.log(this.feedbackUserdata);
}
})
  }

  // deletefeedback(feedbackId:any){
  
  // }
feedbackdata:any;
  openFeedbackDeleteDialog(feedbackId:any) {
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(result=> {
      if (result === 'yes') {
        this.feedbackservice.deleteFeedbackFromConsumer(feedbackId).subscribe({
          next:(result1)=>{
this.feedbackdata=result1;
this.AllUsersFeedback=this.feedbackdata;
                    console.log('Deleting item from favourities...');
          }
                  });

        this._snackBar.open(
          'Congrats!!You have deleted successfully!!',
          'success',
          {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          }
              )
            }

       

       
  });
}
triggerFeedbackForm()
{
  this.triggerButton=true;
  this.triggerbutton1=false;
}

// triggerFavouritiesForm(){
//   this.triggerButton=false;
// }
userdat!: any;
  profilePicdata: any;
  firstNamee!: any;

  getUserDetails() {
    this.userservice.getUserDetails().subscribe({
      next: (result) => {
        this.userdat = result;
        console.log(this.userdat + 'in the userbnoard ');
        this.profilePicdata = this.userdat.profilePic.data;
        this.firstNamee = this.userdat.firstName;
        console.log(this.firstNamee);
      },
    });
  }

  allFavourites:any;
getAllUserFavourties()
{
  this.triggerButton=false;
  this.triggerbutton1=true;
this.adminservice.getAllUsersFavouritelist().subscribe({
  next:(reponse)=>
  {
    this.allFavourites=reponse;
  }
})

}

// private getMapOfUsers() {
//   const priceListMap: Map<string, string> = new Map<string, string>();
//   this.auth.getUser().subscribe(res => {
//     res.map(item => {
//         priceListMap.set(item.login, item.password);
//       }
//     );
//   });
//   return priceListMap;
// }





}
