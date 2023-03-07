import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private client:HttpClient) { }
  authAppBaseUrl = 'http://localhost:8111/';
  sendFeedbackData(feedbackData:any){
       let httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    let requestOptions = { headers: httpHeaders };
    return this.client.get( this.authAppBaseUrl+'send-feedback-to-consumer',requestOptions);

  }

addMovies(movieData:any){
  console.log("heeeee");
  
  let httpHeaders=new HttpHeaders({
    'Authorization' : 'Bearer ' +localStorage.getItem('jwt')
   });
    let requestOptions={headers : httpHeaders};
  return this.client.post( this.authAppBaseUrl+'movie-app/admin/add-movie',movieData,requestOptions);
}

getAllMovies(){
  return this.client.get( this.authAppBaseUrl+'movie-app/get-all-movies');
}

updateMovie(movieData:any){
  let httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  });
  let requestOptions = { headers: httpHeaders };
  return this.client.put( this.authAppBaseUrl +'movie-app/admin/update-movie',movieData,requestOptions);
}
deleteMovie(movieId:string){
  let httpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  });
  let requestOptions = { headers: httpHeaders };
  return this.client.delete( this.authAppBaseUrl +'movie-app/admin/delete-movie/'+movieId, requestOptions);
}



getAllUsersFavouritelist()
{
  return this.client.get(this.authAppBaseUrl +'movie-app/admin/getAllUsersFavourities');
}

}



