package com.movie.movietrack.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Movie implements Comparable<Movie> {
    @Id
    private String movieId;
    private String movieName, rated, lang;

    @Override
    public int compareTo(Movie obj) {
        return this.getMovieName().compareTo(obj.getMovieName());
    }
}

