package com.movie.movietrack.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupData {
    private String emailId;
    private String firstName,lastName,password,mobileNumber,age;
    private Addres address;
    private List<String> movies;
    private  List<ResultsEntity> result;
    private MultipartFile profilePic;
}
