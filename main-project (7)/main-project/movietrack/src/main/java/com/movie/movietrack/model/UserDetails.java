package com.movie.movietrack.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class UserDetails {

    @Id
    private String emailId;

    private String firstName, lastName, mobileNumber, age;

    private Addres address;

    private List<String> movies;

    private List<ResultsEntity> result;

    private Binary profilePic;
}
