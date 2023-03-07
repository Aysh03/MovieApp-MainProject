package com.movie.movietrack.service;
import com.movie.movietrack.exceptions.UserAlreadyExistedException;
import com.movie.movietrack.model.*;
import org.bouncycastle.openssl.PasswordException;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface UserDetailsService {
//    public abstract UserDetails addFavouriteMovie(String movieId,String email);
    public  abstract  UserDetails addFavouriteApiMovie(ResultsEntity resultsEntities,String email);
    public  abstract  List<ResultsEntity> getAllMoviesFromFav(String email);
    public abstract UserDetails getMovieAPIById(String movieIdFromApi,String email);
    public  abstract boolean deleteMovieFromFavourites(int movieIdFromApi,String email);
    public abstract UserDetails getMovieById(String movieId, String email);

    public abstract UserDetails getUserDetails(String emailId);
    public abstract UserDetails registration(SignupData signupData) throws UserAlreadyExistedException, IOException;
    public abstract List<Movie> getSortedMoviesByAlphabet(String emailId);
    public List<UserDetails> getAllUserDetails();
}
