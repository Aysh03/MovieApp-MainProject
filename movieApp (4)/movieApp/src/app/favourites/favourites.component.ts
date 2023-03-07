import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DeleteComponent } from '../delete/delete.component';
import { DataserviceService } from '../services/dataservice.service';
import { NotifierServiceService } from '../services/notifier-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent {
  constructor(
    private userservice: UserServiceService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private dataservice: DataserviceService,
    private router: Router,
    private toaster: NotifierServiceService
  ) {}
  ngOnInit(): void {
    this.getUserDetails();
    this.getAllFavMovies();
  }
  favMovieData: any;
  firstNamee!: any;

  image: any;
  userdat: any;
  profilePicdata: any;
  allMovies: any;
  getUserDetails() {
    this.userservice.getUserDetails().subscribe({
      next: (result) => {
        this.userdat = result;
        console.log(this.userdat);
        this.profilePicdata = this.userdat.profilePic.data;
        this.firstNamee = this.userdat.firstName;
        console.log(this.firstNamee);
      },
    });
  }

  getAllFavMovies() {
    this.userservice.getMovieApiData().subscribe({
      next: (result) => {
        this.allMovies = result;
        console.log(this.favMovieData);
      },
    });
  }

  openDeleteDialog(movieAPiId: number) {
    const dialogRef = this.dialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {
        this.userservice.deleteMovieAPiData(movieAPiId).subscribe((result) => {
          this.userservice.getMovieApiData();
        });
        console.log('Deleting item from favourities...');

        this._snackBar.open(
          'Congrats!!You have deleted successfully!!',
          'success',
          {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          }
        );
      }
    });
  }

  getVideos(idd: number) {
    this.dataservice.id = idd;
    console.log(this.dataservice.id + 'this is the id');
    this.toaster.showSuccess('Now You can Play Movie', 'Hurray!');
    this.router.navigateByUrl('/playMovie');
  }
}
