package com.movie.movietrack.controller;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.movie.movietrack.exceptions.UserAlreadyExistedException;
import com.movie.movietrack.model.*;
import com.movie.movietrack.proxy.LoginProxy;
import com.movie.movietrack.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/movie-app")
public class UserDetailsController {
    @Autowired
    UserDetailsService userDetailsService;

    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(SignupData signupData) throws IOException, UserAlreadyExistedException {
        System.out.println(signupData);
//        signupData.setMovies(new ArrayList<String>());
//        signupData.setResult(new ArrayList<>());
        return new ResponseEntity<>(userDetailsService.registration(signupData), HttpStatus.OK);
    }


















    @GetMapping("/get-user-details")
    public ResponseEntity<?> getAllUsers(HttpServletRequest request) {
        String email = (String) request.getAttribute("current_user_emailid");
        System.out.println(userDetailsService.getUserDetails(email));
        return new ResponseEntity<>(userDetailsService.getUserDetails(email), HttpStatus.OK);
    }
//    @PostMapping("/add-movie-to-favourites/{movieId}")
//    public ResponseEntity<?> addMovieToFavour(@PathVariable String movieId, HttpServletRequest request){
//        String email=(String) request.getAttribute("current_user_emailid");
//        return new ResponseEntity<>(userDetailsService.addFavouriteMovie(movieId,email) ,HttpStatus.OK);
//    }

    @PostMapping("/add-movieApi-to-favourites")
    public ResponseEntity<?> addMovieApiToFavour(@RequestBody ResultsEntity resultsEntities, HttpServletRequest request) throws IOException {
        String email = (String) request.getAttribute("current_user_emailid");
        System.out.println(resultsEntities);
        return new ResponseEntity<>(userDetailsService.addFavouriteApiMovie(resultsEntities, email), HttpStatus.OK);
    }





    //
//         ObjectMapper mapper = new ObjectMapper();
//          List<ResultsEntity> resultsEntities1 = mapper.readValue((JsonParser) resultsEntities, new TypeReference<List<ResultsEntity>>(){});

    // do something with the list of persons





    @GetMapping("/get-all-movies-from-favourities")
    public ResponseEntity<?> getAllMoviesFromFav(HttpServletRequest request) {
        String email = (String) request.getAttribute("current_user_emailid");
        System.out.println(userDetailsService.getUserDetails(email));
        return new ResponseEntity<>(userDetailsService.getAllMoviesFromFav(email), HttpStatus.OK);
    }


    @GetMapping("/get-movie-by-id/{movieId}")
    public ResponseEntity<?> getMovieById(@PathVariable String movieId, HttpServletRequest request) {
        String email = (String) request.getAttribute("current_user_emailid");
        System.out.println(email + "" + movieId);
        return new ResponseEntity<>(userDetailsService.getMovieById(movieId, email), HttpStatus.OK);
    }

    @GetMapping("/sortByMovieName")
    public ResponseEntity<?> sortingMovieByName(HttpServletRequest request) {
        String email = (String) request.getAttribute("current_user_emailid");
        System.out.println(email);
        //   return new ResponseEntity<>(userDetailsService.getSortedMoviesByAlphabet(email),HttpStatus.OK);
        return new ResponseEntity<>(userDetailsService.getSortedMoviesByAlphabet(email), HttpStatus.OK);
    }

    @DeleteMapping("/delete-movie-from-favourites/{movieIdFromApi}")
    public ResponseEntity<?> deleteMovie(@PathVariable int movieIdFromApi, HttpServletRequest request) {

        String email = (String) request.getAttribute("current_user_emailid");
        System.out.println(email + "" + movieIdFromApi);
        return new ResponseEntity<>(userDetailsService.deleteMovieFromFavourites(movieIdFromApi, email), HttpStatus.OK);
    }

}
