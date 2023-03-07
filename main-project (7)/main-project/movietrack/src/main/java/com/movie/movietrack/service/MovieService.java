package com.movie.movietrack.service;

import com.movie.movietrack.model.Movie;

import java.util.List;

public interface MovieService {
    public abstract List<Movie> getAllMovies();
    public abstract Movie addMovie(Movie movie);

    public abstract Movie getMovieById(String movieId);
    public abstract boolean deleteMovie(String movieId);
    public abstract Movie updateMovie(Movie movie);
}
