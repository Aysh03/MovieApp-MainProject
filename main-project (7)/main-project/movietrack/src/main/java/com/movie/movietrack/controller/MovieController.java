package com.movie.movietrack.controller;

import com.movie.movietrack.model.Movie;
import com.movie.movietrack.service.MovieService;
import com.movie.movietrack.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/movie-app")
public class MovieController {
    @Autowired
    MovieService movieService;
    @Autowired
    UserDetailsService userDetailsService;

    @GetMapping("/get-all-movies")
    public ResponseEntity<?> getAllMovies(){
        return new ResponseEntity<>(movieService.getAllMovies(), HttpStatus.OK);
    }

    @PostMapping("/admin/add-movie")
    public ResponseEntity<?> addMovie(@RequestBody Movie movie){
        return new ResponseEntity<>(movieService.addMovie(movie),HttpStatus.OK);
    }

    @PutMapping("/admin/update-movie")
    public ResponseEntity<?> updateMovie(@RequestBody Movie movie){
        return new ResponseEntity<>(movieService.updateMovie(movie),HttpStatus.OK);
    }

    @DeleteMapping("/admin/delete-movie/{movieId}")
    public ResponseEntity<?> deleteMovie(@PathVariable  String movieId){
        return new ResponseEntity<>(movieService.deleteMovie(movieId),HttpStatus.OK);
    }

    @GetMapping("/admin/getAllUsersFavourities")
    public  ResponseEntity<?> getAllUserFavourities(){

        return  new ResponseEntity<>(userDetailsService.getAllUserDetails(),HttpStatus.OK);
    }
}
