import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';
import { DataserviceService } from '../services/dataservice.service';
import { UserServiceService } from '../services/user-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // template:`<div
  //   class="row mt-3 pt-2 px-2"
  //   style="background-color: black" *ngIf="searchResults.length>0"
  //   (click)="toLogin()"
  // >
  //   <h4 class="heading"><b> Search Results </b></h4>
  //   <div
  //     class="col-md-2 mt-3"
  //     *ngFor="let movieres of searchResults; let i = index"
  //   >
  //     <div
  //       class="card card_sizing"
  //       *ngIf="i < 6"
  //       style="background-color: pink"
  //     >
  //       <img src="{{'https://image.tmdb.org/t/p/w500/'+ movieres.poster_path }}" class="card-img-top" alt="" />

  //       <div class="card-body">
  //         <h5 class="card-title">{{ movieres.title }}</h5>

  //         <p>
  //           <b> <span class="text-danger">Rating</span> </b>:{{
  //             movieres.vote_average
  //           }}
  //         </p>

  //         <p>
  //           Language:
  //           <span class="p-1" style="background-color: rgb(9, 180, 232)">
  //             <b>{{ movieres.original_language | uppercase }}</b></span
  //           >
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>`
})
export class HomeComponent implements OnInit {
  latestMovie!: any;
  popularMovies!: Movie;
  topRatedMovies!: Movie;
  nowPlayingMovies!: Movie;
  upComingMovies!: Movie;
  trendingMovies!: Movie;
  originals!: Movie;

  userData!: any;

  searchText: string = '';
  imageUrl: any;

  searchBarValue = true;

  constructor(
    private userSer: UserServiceService,
    private dataservice: DataserviceService,
    private router: Router,
    private domSantizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log('ng onit');
    this.searchingMovies(this.searchText);
    // this.getLatestMovie();
    // this.getPopularMovies();
    // this.getNowPlayingMovies();
    // this.getTopRatedMovies();
    // this.getTrendingMovies();
    // this.getUpcomingMovies();
    // this.getOriginalsMovies();
  }

  searchValue: string = '';

  searchResults: any[] = [''];

searchbox!:string;

  searchingMovies(searchKeyword: string) {
    console.log('this is in search movie begining');
    console.log();
    
//  
    if (searchKeyword== '') {
// this.searchBarValue = true;
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
          // this.searchingMovies(this.searchText);

          // this.searchValue=res.results.map((movie:any)=> movie.title?.toLowerCase().includes(searchKeyword.toLowerCase()))
          setTimeout(() => {
      setTimeout(() => {
       
        this.searchBarValue=true
      });
    }, 5000); //5seconds used

    
          console.log(this.searchResults);
          
        }
      });
    }
  }

resetSearchBox()
{
  this.searchbox='';
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
}
