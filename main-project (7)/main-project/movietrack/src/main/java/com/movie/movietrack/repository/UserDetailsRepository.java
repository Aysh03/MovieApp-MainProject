package com.movie.movietrack.repository;

import com.movie.movietrack.model.LoginDTO;
import com.movie.movietrack.model.UserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserDetailsRepository extends MongoRepository<UserDetails,String> {
}
