import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeleteComponent } from '../delete/delete.component';
import { Movie } from '../model/movie';
import { AdminServiceService } from '../services/admin-service.service';
import { DataserviceService } from '../services/dataservice.service';
import { NotifierServiceService } from '../services/notifier-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    private userservice: UserServiceService,
    private router: Router,
    private dataservice: DataserviceService,
    private adminservice: AdminServiceService,
    private toaster: NotifierServiceService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  movieId: any;
  movieName: any;
  rating: any;
  language: any;
  id: any;
  latestMovie!: any;
  popularMovies!: Movie;
  topRatedMovies!: Movie;
  nowPlayingMovies!: Movie;
  upComingMovies!: Movie;
  trendingMovies!: Movie;
  originals!: Movie;
  videos: Movie[] = [];
  userData!: any;
  ngOnInit(): void {
    this.searchingMovies(this.searchText);
    // this.getLatestMovie();
    // this.getPopularMovies();
    // this.getNowPlayingMovies();
    // this.getTopRatedMovies();
    // this.getTrendingMovies();
    // this.getUpcomingMovies();
    // this.getOriginalsMovies();
    this.getUserDetails();

    // this.getVideos(this.id);

    console.log('*********');

    console.log('ng onit');
  }

  videosinfo: any[] = [''];

  searchText: string = '';
  searchBarValue = true;
  searchResults: any[] = [''];

  searchingMovies(searchKeyword: string) {
    console.log('this is in search movie begining');
    console.log();

    //
    if (searchKeyword == '') {
      // this.searchBarValue = false;
      console.log();

      this.getPopularMovies();
      this.getNowPlayingMovies();
      this.getTopRatedMovies();
      this.getTrendingMovies();
      this.getUpcomingMovies();
      this.getOriginalsMovies();
    } else {
      this.searchBarValue = false;
      console.log('this is inside the search movie method');
      console.log(searchKeyword);

      this.dataservice.searchMovie(searchKeyword).subscribe({
        next: (res) => {
          console.log(res + 'this is above filter Line number 72 home ts');

          this.searchResults = res.results.filter((movie: any) =>
            movie.title?.toLowerCase().includes(searchKeyword.toLowerCase())
          );
          this.searchingMovies(this.searchText);

          // this.searchValue=res.results.map((movie:any)=> movie.title?.toLowerCase().includes(searchKeyword.toLowerCase()))
          setTimeout(() => {
            setTimeout(() => {
              this.searchBarValue = true;
            });
          }, 5000); //5seconds used

          console.log(this.searchResults);
        },
      });
    }
  }



  getVideos(idd: number) {
    this.dataservice.id = idd;
    console.log(this.dataservice.id + 'this is the id');
    this.toaster.showSuccess('Now You can Play Movie', 'Hurray!');
    this.router.navigateByUrl('/playMovie');
  }

  getLatestMovie() {
    this.dataservice.getLatestMovie().subscribe({
      next: (res) => {
        this.latestMovie = this.changeData(res);
        // this.latestMovie=res;
        console.log(this.latestMovie);
      },
      error: (err) => {
        console.log('not able to ', err);
      },
    });
  }
  changeData(res: any): any {
    if (!res.backdrop_path) {
      res.backdrop_path =
        'https://image.tmdb.org/t/p/original' +
        res.poster_path +
        '?api_key= ' +
        environment.api_key;
    } else {
      res.backdrop_path =
        'https://image.tmdb.org/t/p/original' +
        res.backdrop_path +
        '?api_key= ' +
        environment.api_key;
    }
    return res;
  }
  getPopularMovies() {
    this.dataservice.getPopularMovies().subscribe({
      next: (res) => {
        this.popularMovies = this.modifyData(res);
        console.log(this.popularMovies);
      },
      error: (err) => {
        console.log('not able to get popular', err);
      },
    });
  }

  modifyData(movies: Movie): Movie {
    if (movies.results) {
      movies.results.forEach((elment) => {
        elment.backdrop_path =
          'https://image.tmdb.org/t/p/original' +
          elment.backdrop_path +
          '?api_key= ' +
          environment.api_key;
        if (!elment.title) {
          elment.title = elment?.name;
        }
      });
    }
    return movies;
  }

  getNowPlayingMovies() {
    this.dataservice.getNowPlayingMovies().subscribe({
      next: (res) => {
        this.nowPlayingMovies = this.modifyData(res);
        console.log(this.nowPlayingMovies);
      },
      error: (err) => {
        console.log('not able to get now playing', err);
      },
    });
  }

  getTopRatedMovies() {
    this.dataservice.getTopRatedMovies().subscribe({
      next: (res) => {
        this.topRatedMovies = this.modifyData(res);
        console.log(this.topRatedMovies);
      },
      error: (err) => {
        console.log('not able to get top Rated Movies', err);
      },
    });
  }

  getUpcomingMovies() {
    this.dataservice.getUpcomingMovies().subscribe({
      next: (res) => {
        this.upComingMovies = this.modifyData(res);
        console.log(this.upComingMovies);
      },
      error: (err) => {
        console.log('not able to get upcoming', err);
      },
    });
  }

  getTrendingMovies() {
    this.dataservice.getTrendingMovies().subscribe({
      next: (res) => {
        this.trendingMovies = this.modifyData(res);
        console.log(this.trendingMovies);
      },
      error: (err) => {
        console.log('not able to get trending', err);
      },
    });
  }

  getOriginalsMovies() {
    this.dataservice.getOrginals().subscribe({
      next: (res) => {
        this.originals = this.modifyData(res);
        console.log(this.originals);
      },
      error: (err) => {
        console.log('not able to get trending', err);
      },
    });
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  image: any;
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

  //  firstNamee!: any;

  //   image: any;
  //   userdat: any;
  //   profilePicdata: any;
  //   allMovies: any;
  //   getUserDetails() {
  //     this.userservice.getUserDetails().subscribe({
  //       next: (result) => {
  //         this.userdat = result;
  //         console.log(this.userdat);
  //         this.profilePicdata = this.userdat.profilePic.data;
  //         this.firstNamee = this.userdat.firstName;
  //         console.log(this.firstNamee);
  //       },
  //     });
  //   }

  moviedata: any;
  getMovieData() {
    this.adminservice.getAllMovies().subscribe({
      next: (result: any) => {
        this.moviedata = result;
        console.log(result);

        console.log(this.moviedata);
      },
    });
  }

  addToTFavourites() {
    this.router.navigate(['/favourites']);
  }

  movieapidata!: [];
  addMovieApiData(movieInfo: any) {
    this.userservice.addMovieAPiDataToFav(movieInfo).subscribe({
      next: (result: any) => {
        this.movieapidata = result;
        console.log(this.movieapidata);
        this.userservice.getMovieApiData();
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

  addFeedbackFormdata(){
    this.router.navigateByUrl('/feedback')
  }









}
