package com.movie.movietrack.repository;

import com.movie.movietrack.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MovieRepository extends MongoRepository<Movie,String> {
        //public abstract Movie findByMovieName(String movieName);
}
