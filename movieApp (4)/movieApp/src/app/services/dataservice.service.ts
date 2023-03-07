
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  searchedtext: string = '';

videoData: any[] = [''];
 key!:string;
id!:number;


  url: string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}


  query: string = '';


  searchMovie(searchedtext: string): Observable<any> {
    console.log('search Movie' + searchedtext);
    
    (this.query =
      'https://api.themoviedb.org/3/search/multi?api_key=0d56649f05ceeb75bbca44a3d4ca7bf0&language=en-US&query=' +
      searchedtext +
      '&page=1&include_adult=false&year=2022'),
      { observe: 'response' };
    console.log(this.query + 'in data service search movie');

    for (let i = 0; i < searchedtext.length; i++) {
      if (searchedtext[i] === '') {
        searchedtext = searchedtext.replace(' ', '%20');
      }
      this.query += searchedtext;
      console.log(this.query + 'this is within query after removing space');
      
    }
    // return this.http.get<any>( 'https://api.themoviedb.org/3/search/multi?api_key=0d56649f05ceeb75bbca44a3d4ca7bf0&language=en-US&query='+searchedtext+'%20'+ '%20'+'&page=1&include_adult=false&year=2022')

    return this.http.get<any>(this.query);

    // return this.http.get<any>( this.url +'/search/multi?api_key='+environment.api_key+'&language=en-US&query='+searchedtext+'page=1&include_adult=true&year=2022')
    // https://api.themoviedb.org/3/search/movie?api_key=0d56649f05ceeb75bbca44a3d4ca7bf0&language=en-US&query=black%20adam&page=1&include_adult=true&year=2022
  }



  videourl: string = '';

  getVideos(id: number):Observable<any> {
    this.videourl =
      'https://api.themoviedb.org/3/movie/' +
      id +
      '/videos?api_key=0d56649f05ceeb75bbca44a3d4ca7bf0&language=en-US';
    return this.http.get<Movie>(this.videourl);

  }













 getVideoData()
 {
  this.videoData;
 }





  getLatestMovie(): Observable<any> {
    console.log(environment.api_key);
    console.log('in the service');

    return this.http.get<any>(
      this.url + '/movie/latest?api_key=' + environment.api_key
    );
  }

  getPopularMovies(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/movie/popular?api_key=' + environment.api_key
    );
  }

  getNowPlayingMovies(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/movie/now_playing?api_key=' + environment.api_key
    );
  }

  getTopRatedMovies(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/movie/top_rated?api_key=' + environment.api_key
    );
  }

  getUpcomingMovies(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/movie/upcoming?api_key=' + environment.api_key
    );
  }

  getTrendingMovies(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/trending/all/week?api_key=' + environment.api_key
    );
  }

  getOrginals(): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + '/discover/tv?api_key=' + environment.api_key
    );
  }
}
