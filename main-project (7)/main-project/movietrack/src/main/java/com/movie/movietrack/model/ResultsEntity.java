package com.movie.movietrack.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.io.Reader;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResultsEntity {
    private int id;
    private String name;
    private boolean adult;
    private int[] genre_ids;

    private String backdrop_path;
    private String original_language;
    private String original_title;
    private String overview;
    private int popularity;

    private String poster_path;
    private String release_date;
    private String title;
    private boolean video;

    private float vote_average;
    private int vote_count;


}
