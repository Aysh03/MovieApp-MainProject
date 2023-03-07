import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  profilePicDetails:any ;


  constructor(private client:HttpClient) { }
  // authAppBaseUrl = 'http://localhost:5555/login-auth';
  authAppBaseUrl = 'http://localhost:8111';
  movieAppBaseUrl= 'http://localhost:9999/movie-app';
  
// http://localhost:8111//login-auth/login-check'


  registerUser(user:any)
  {

    return this.client.post(this.authAppBaseUrl + '/movie-app/register-user', user );
  }
loginCheck(loginData:any){
  return this.client.post(this.authAppBaseUrl + '/login-auth/login-check', loginData);
}
viewProfilePic()
{
  this.profilePicDetails
}
  
getUserDetails(){
  let httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  });
  let requestOptions = { headers: httpHeaders };
console.log("hello")
console.log( this.client.get(this.authAppBaseUrl+'/movie-app/get-user-details',requestOptions));
console.log("am in service");

  return this.client.get(this.authAppBaseUrl+'/movie-app/get-user-details',requestOptions);
}


getMovieById(movieId:string){
  let httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  });
  let requestOptions = { headers: httpHeaders };
  return this.client.get( this.authAppBaseUrl+'/movie-app/get-movie-by-id/'+movieId, requestOptions);
}


addMovieAPiDataToFav(movieInfo:any){
  let httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  });
  let requestOptions = { headers: httpHeaders };
  return this.client.post( this.authAppBaseUrl+'/movie-app/add-movieApi-to-favourites',movieInfo,requestOptions);
}



getMovieApiData(){
  let httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  });
  let requestOptions = { headers: httpHeaders };
  return this.client.get( this.authAppBaseUrl + '/movie-app/get-all-movies-from-favourities', requestOptions);
}



deleteMovieAPiData(movieApiId:number){

  let httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  });
  let requestOptions = { headers: httpHeaders };
  return this.client.delete( this.authAppBaseUrl + '/movie-app/delete-movie-from-favourites/'+movieApiId, requestOptions);
}




}
