package com.movie.movietrack.service;

import com.movie.movietrack.model.Movie;
import com.movie.movietrack.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    MovieRepository movieRepository;

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }


    @Override
    public Movie addMovie(Movie movie) {
        return movieRepository.insert(movie);
    }


    @Override
    public Movie getMovieById(String movieId) {
        return movieRepository.findById(movieId).get();
    }

    @Override
    public boolean deleteMovie(String movieId) {
        movieRepository.deleteById(movieId);
        return true;
    }

    @Override
    public Movie updateMovie(Movie movie) {
        return movieRepository.save(movie);
    }
}
